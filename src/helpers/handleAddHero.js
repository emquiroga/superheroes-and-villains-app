export const handleAddHero = ( heroe ) => {
    let newMember = heroe
    const localHeroes = localStorage.getItem("heroes");
    if (localHeroes == null) {
      localStorage.setItem("heroes", "[]");
    }
    const data = JSON.parse(localStorage.getItem("heroes"));
    if (data.length < 6) {
      data.push(newMember);
      localStorage.setItem("heroes", JSON.stringify(data));
    } else if (data.length === 6) {
      alert("Max number of heroes");
    }
  };