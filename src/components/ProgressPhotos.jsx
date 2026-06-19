import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage, auth } from "../services/firebase";

export default function ProgressPhotos() {
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [beforePhoto, setBeforePhoto] = useState("");
  const [afterPhoto, setAfterPhoto] = useState("");
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

      {photos.length >= 2 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Before & After Comparison</h3>

          <select
            value={beforePhoto}
            onChange={(e) => setBeforePhoto(e.target.value)}
          >
            <option value="">Choose before photo</option>
            {photos.map((url, index) => (
              <option key={url} value={url}>
                Photo {index + 1}
              </option>
            ))}
          </select>

          <select
            value={afterPhoto}
            onChange={(e) => setAfterPhoto(e.target.value)}
          >
            <option value="">Choose after photo</option>
            {photos.map((url, index) => (
              <option key={url} value={url}>
                Photo {index + 1}
              </option>
            ))}
          </select>

          {beforePhoto && afterPhoto && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginTop: "16px"
              }}
            >
              <div>
                <h4>Before</h4>
                <img
                  src={beforePhoto}
                  alt="Before progress"
                  style={{ width: "100%", borderRadius: "16px" }}
                />
              </div>

              <div>
                <h4>After</h4>
                <img
                  src={afterPhoto}
                  alt="After progress"
                  style={{ width: "100%", borderRadius: "16px" }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      <h3 style={{ marginTop: "20px" }}>Photo Timeline</h3>

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