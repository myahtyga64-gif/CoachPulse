import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage, auth } from "../services/firebase";

export default function ProgressPhotos() {
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState("");

  async function loadPhotos() {
    const user = auth.currentUser;
    if (!user) return;

    const folderRef = ref(storage, `users/${user.uid}/progressPhotos`);
    const result = await listAll(folderRef);

    const urls = await Promise.all(
      result.items.map((item) => getDownloadURL(item))
    );

    setPhotos(urls);
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  async function uploadPhoto() {
    const user = auth.currentUser;
    if (!user || !file) return;

    const photoRef = ref(
      storage,
      `users/${user.uid}/progressPhotos/${Date.now()}-${file.name}`
    );

    await uploadBytes(photoRef, file);

    setMessage("Photo uploaded!");
    setFile(null);
    loadPhotos();
  }

  return (
    <section className="panel">
      <h2>Progress Photos</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={uploadPhoto}>Upload Photo</button>

      {message && <p>{message}</p>}

      <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
        {photos.map((url) => (
          <img
            key={url}
            src={url}
            alt="Progress"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        ))}
      </div>
    </section>
  );
}