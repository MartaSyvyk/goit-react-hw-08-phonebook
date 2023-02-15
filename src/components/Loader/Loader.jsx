import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.30)',
        zIndex: '100',
        position: 'absolute',
        right: 0,
        bottom: 0,
        minWidth: '100vw',
        minHeight: '100%',
        display: 'flex',
      }}
    >
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#3f51b5"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle={{
          position: 'fixed',
          top: '50vh',
          left: '50vw',
          transform: 'translate(-50%,-50%)',
        }}
        visible={true}
      />
    </div>
  );
};
