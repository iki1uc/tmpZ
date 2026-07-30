export function TMP_DASH(tmp){
    return {
        mode: tmp.mode,
        active: tmp.active,
        sizeMB: tmp.size / (1024*1024),
        id: tmp.id
    };
}
