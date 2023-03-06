const st = {
  name: "Antoine",
  family: {
    mother: "Yvette",
    father: "Michel",
    sister: "Sylvie",
  },
  age: 49,
};

// const {
//   name,
//   family: { sister },
// } = st;

const sister = st.family.sister;

console.log(sister);
