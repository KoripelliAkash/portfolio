import Spline from '@splinetool/react-spline';

export default function AboutSplineModel() {
  return (
    <div className="about-model">
      <Spline
        scene="https://prod.spline.design/UMS86nhgWONze4Dr/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="model-overlay"></div>
    </div>
  );
}