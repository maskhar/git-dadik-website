import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: 6,
          position: 'relative',
        }}
      >
        <span>DWC</span>
        <div
          style={{
            position: 'absolute',
            right: 2,
            bottom: 8,
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#D71920',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
