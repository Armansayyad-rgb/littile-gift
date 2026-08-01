/** Pointer sits at 12 o'clock. Segment 0 begins at 12 o'clock and advances clockwise. */
export const wheelRotationForIndex=(index:number,segments=10,turns=5)=>{if(!Number.isInteger(index)||index<0||index>=segments)throw new Error('Invalid wheel index');const segment=360/segments;return turns*360+(360-(index*segment+segment/2));};
export const validPlaylistUrl=(value:string)=>{try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='open.spotify.com'}catch{return false}};
