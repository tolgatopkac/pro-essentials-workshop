type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!a
  // option + esc
  bar: 12,
  baz: true,
  foo: "abc",
});

document.addEventListener(
  // Autocomplete this string!
  "",
  (event) => {
    console.log(event);
  }
);
