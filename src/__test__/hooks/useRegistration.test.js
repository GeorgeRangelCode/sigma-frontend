import { renderHook, act } from "@testing-library/react-hooks";
import { useRegistration } from "../../hooks/useRegistration";

test("render hook useRegistration", () => {
  const { result } = renderHook(() => useRegistration());
  console.log("result", result.current);

  act(() => {
    const values = {};
    const actions = {};
    result.current.onSubmit(values, actions);
  });
});
