export function TMP_CORE(){
    return {
        mode: "tmp",
        timestamp: Date.now(),
        active: true,
        size: 768 * 1024 * 1024, // 768 MB
        id: Math.random().toString(36).slice(2)
    };
}
