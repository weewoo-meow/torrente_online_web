function extractAsciiString(data: number[], offset: number, maxLength = 32): string {
  const slice = data.slice(offset, offset + maxLength);
  const chars = slice
    .filter(byte => byte >= 32 && byte <= 126) // solo caracteres ASCII imprimibles
    .map(byte => String.fromCharCode(byte));
  return chars.join('');
}
function extractAsciiSegments(data: number[]): string[] {
  const ascii = data.map(b => (b >= 32 && b <= 126) ? String.fromCharCode(b) : ' ').join('');
  const words = ascii.replace(/\s+/g, ' ').trim().split(' ');

  return words.filter(w =>
    w.length >= 3 &&              // mínimo 3 caracteres ahora
    /^[\w\-!]+$/.test(w) &&       // alfanumérico aceptable
    !/^(\d{1,3}\.){3}\d{1,3}$/.test(w) // no una IP
  );
}
function extractMatchName(data: number[]): string {
  const segments = extractAsciiSegments(data);

  // Elimina mapas tipo MP_***
  const filtered = segments.filter(w => !w.startsWith('MP_'));

  // Suponemos que el primer string válido después del jugador es la partida
  if (filtered.length >= 2) {
    return filtered[1];
  }

  return filtered[0] || 'Unknown';
}


export function transformServers(rawServers: any[]): any[] {
  return rawServers.map((server) => {
    const data: number[] = server.payload.data;
    const name = extractMatchName(data);
    const map = extractAsciiString(data, 351, 32);  // mantener si sale bien

    const currentPlayers = 1
    const maxPlayers = 16

    const players = `${currentPlayers} / ${maxPlayers}`;
    const time = Math.floor((Date.now() - server.refresh_date) / 1000); // tiempo en segundos
    const ping = Math.floor(Math.random() * 50) + 10; // ping simulado

    return { name, map, players, time, ping };
  });
}
