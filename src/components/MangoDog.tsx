export default function MangoDog() {
  return (
    <div className="relative inline-block">

      {/* Floater — gentle up/down + rotation */}
      <div className="animate-float inline-block" style={{ transformOrigin: 'center bottom' }}>
        <div className="relative" style={{ width: 140, height: 140 }}>

          {/* Wagging tail */}
          <div
            className="animate-tail-wag absolute"
            style={{
              bottom: 18, right: -12,
              width: 36, height: 36,
              border: '10px solid #ea580c',
              borderRadius: '50%',
              clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)',
              transformOrigin: 'bottom left',
            }}
          />

          {/* Body */}
          <div
            className="absolute"
            style={{
              bottom: 0, left: '50%', transform: 'translateX(-50%)',
              width: 90, height: 55, background: '#f97316',
              borderRadius: '50% 50% 30% 30% / 40% 40% 20% 20%',
            }}
          >
            {/* Chest cream patch */}
            <div style={{
              position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
              width: 54, height: 36, background: '#fde8c8', borderRadius: '50%',
            }} />
          </div>

          {/* Head */}
          <div
            className="absolute"
            style={{
              top: 4, left: '50%', transform: 'translateX(-50%)',
              width: 98, height: 92, background: '#f97316',
              borderRadius: '50% 50% 45% 45% / 55% 55% 40% 40%',
            }}
          >
            {/* Left ear */}
            <div style={{ position: 'absolute', top: -18, left: 10 }}>
              <div style={{ width: 0, height: 0, borderLeft: '16px solid transparent', borderRight: '16px solid transparent', borderBottom: '30px solid #ea580c', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 8, left: -8, width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '16px solid #fed7aa' }} />
              </div>
            </div>

            {/* Right ear */}
            <div style={{ position: 'absolute', top: -18, right: 10 }}>
              <div style={{ width: 0, height: 0, borderLeft: '16px solid transparent', borderRight: '16px solid transparent', borderBottom: '30px solid #ea580c', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 8, left: -8, width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '16px solid #fed7aa' }} />
              </div>
            </div>

            {/* Forehead cream patch */}
            <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 38, height: 22, background: '#fde8c8', borderRadius: '50%' }} />

            {/* Cheeks */}
            <div style={{ position: 'absolute', bottom: 14, left: 6,  width: 36, height: 28, background: '#fde8c8', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: 14, right: 6, width: 36, height: 28, background: '#fde8c8', borderRadius: '50%' }} />

            {/* Left eye */}
            <div style={{ position: 'absolute', top: 38, left: 20, width: 13, height: 13, background: '#1c0a00', borderRadius: '50%' }}>
              <div style={{ position: 'absolute', top: 2, right: 1, width: 4, height: 4, background: 'white', borderRadius: '50%' }} />
            </div>
            {/* Right eye */}
            <div style={{ position: 'absolute', top: 38, right: 20, width: 13, height: 13, background: '#1c0a00', borderRadius: '50%' }}>
              <div style={{ position: 'absolute', top: 2, right: 1, width: 4, height: 4, background: 'white', borderRadius: '50%' }} />
            </div>

            {/* Nose */}
            <div style={{ position: 'absolute', top: 54, left: '50%', transform: 'translateX(-50%)', width: 16, height: 11, background: '#1c0a00', borderRadius: '40% 40% 50% 50%' }} />

            {/* Mouth */}
            <div style={{ position: 'absolute', top: 66, left: '50%', transform: 'translateX(-50%)', width: 20, height: 9, borderBottom: '2.5px solid #92400e', borderLeft: '2.5px solid #92400e', borderRight: '2.5px solid #92400e', borderRadius: '0 0 12px 12px' }} />

            {/* Blush */}
            <div style={{ position: 'absolute', top: 54, left: 12,  width: 12, height: 7, background: 'rgba(251,113,133,0.5)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: 54, right: 12, width: 12, height: 7, background: 'rgba(251,113,133,0.5)', borderRadius: '50%' }} />
          </div>

        </div>
      </div>

      {/* Pulsing shadow */}
      <div
        className="animate-shadow-pulse"
        style={{
          width: 110, height: 14,
          background: 'radial-gradient(ellipse, rgba(180,80,0,0.22), transparent 70%)',
          borderRadius: '50%',
          margin: '2px auto 0',
        }}
      />

      {/* Name label */}
      <p className="text-center text-xs font-bold text-orange-600 tracking-wide mt-1.5 opacity-80">
        🍋 Mango
      </p>
    </div>
  );
}
