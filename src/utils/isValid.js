import { Invalid } from "../constant";

function isValid($d) {
  return $d.toString() === Invalid;
}

export default isValid;
