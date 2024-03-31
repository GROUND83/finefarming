export const SearchAddress = async (searchWord) => {
  const param = {
    confmKey: "U01TX0FVVEgyMDI0MDMzMDIyMzI0MzExNDY0NTg=",
    currentPage: 0,
    countPerPage: 10,
    keyword: searchWord,
    resultType: "json",
  };
  const queryString = new URLSearchParams(param).toString();
  try {
    const res = await fetch(
      `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=U01TX0FVVEgyMDI0MDMzMDIyMzI0MzExNDY0NTg=&currentPage=1&countPerPage=5&keyword=${searchWord}&resultType=json`
    );
    let resdata = await res.json();
    console.log("rest", resdata);
    if (resdata) {
      return resdata.results;
    }
  } catch (error) {
    console.error(error);
  }
};
