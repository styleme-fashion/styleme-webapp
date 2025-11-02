"use server";
import { createClient } from "@/lib/supabase/server";

const getAssetIdFromDb = async () => {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("avatars")
    .select("meshcapade_asset_id")
    .eq("user_id", user.data.user?.id)
    .limit(1)
    .single();

  if (error) {
    return null;
  }

  return data.meshcapade_asset_id;
};

const requestImageUploadLink = async (assetId: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_MESHCAPADE_API_URL + `/avatars/${assetId}/images`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_MESHCAPADE_API_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  if (res.status != 200) {
    console.log("Error requesting image upload link", await res.json());
    return;
  }

  const data = await res.json();
  console.log(data);
};

export const handleImageUpload = async () => {
  const assetId = await getAssetIdFromDb();

  if (assetId) {
    await requestImageUploadLink(assetId);
  } else {
    await initiateAvatarCreation();
  }
};

export const initiateAvatarCreation = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_MESHCAPADE_API_URL + "/avatars/create/from-images",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_MESHCAPADE_API_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  if (res.status !== 200) {
    console.log("Error creating avatar", await res.json());
    return;
  }

  const data = await res.json();

  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  const { error } = await supabase.from("avatars").insert({
    user_id: user.data.user?.id,
    meshcapade_asset_id: data.data.id,
  });

  if (error) {
    console.log("Error inserting into avatars table", error);
  }

  await requestImageUploadLink(data.data.id);
};
