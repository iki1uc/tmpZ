export function ID_TMP(tmp){
    return {
        mode: "tmp-id",
        identity: "TMP‑Raum",
        id: tmp.id,
        info(){
            return `TMP‑Raum ${tmp.id} ist aktiv und adressierbar.`;
        }
    };
}
