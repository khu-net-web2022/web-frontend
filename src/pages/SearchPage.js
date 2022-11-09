import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  let [searchParam] = useSearchParams();
  return <div className="content-block">{`추후에 구현할 게시글 검색 페이지입니다. 현재 "${searchParam.get("query")}"를 검색하셨습니다.`}</div>;
}
