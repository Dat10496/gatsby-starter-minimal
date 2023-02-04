import numeral from "numeral";

export function fCurrency(number) {
  return numeral(number).format(
    Number.isInteger(number) ? `${number},000` : "0,00"
  );
}
