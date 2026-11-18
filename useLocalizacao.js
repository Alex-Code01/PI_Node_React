import { useState, useEffect } from "react";

export default function useLocalizacao() {
  const [posicao, setPosicao] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setErro("Seu navegador não oferece localização.");
      return;
    }
    const id = navigator.geolocation.watchPosition(
      (p) => setPosicao([p.coords.latitude, p.coords.longitude]),
      () => setErro("Permita o acesso à localização para ver pontos próximos."),
      { enableHighAccuracy: true, maximumAge: 10000 }
    );
    return () => navigator.geolocation.clearWatch(id);
  }, []);

  return { posicao, erro };
}
