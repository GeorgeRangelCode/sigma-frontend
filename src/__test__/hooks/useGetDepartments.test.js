import { renderHook } from "@testing-library/react-hooks";
import { useGetDepartments } from "../../hooks/useGetDepartments";

test("render hook useGetDepartments", () => {
  const { result } = renderHook(() => useGetDepartments());
  console.log("result", result.current);
});
