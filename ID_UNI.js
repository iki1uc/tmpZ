export function ID_UNI(name){
    return {
        mode: "tmp-id",
        tmp: name,
        identity: `TMP‑Raum ${name}`,
        timestamp: Date.now(),
        info(){
            return `Der TMP‑Raum "${name}" ist aktiv, adressierbar und Teil der TMP‑Matrix.`;
        }
    };
}
