import qs from "qs";

function About({ location }) {
  const qeury = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <div>
      <h1>소개</h1>
      <p>{qeury.detail && "detail 값을 true 로 설정하셨습니다, "}</p>
    </div>
  );
}

export default About;
