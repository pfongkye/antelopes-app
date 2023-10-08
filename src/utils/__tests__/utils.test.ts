import { prepareDoughnutData, prepareScatterData } from "../utils";

describe("utils", () => {
  const antelopes = [
    {
      name: "Addax",
      continent: "Africa",
      weight: 220,
      height: 41,
      horns: "Twisted",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/A_big_male_Addax_showing_as_the_power_of_his_horns.jpg/1280px-A_big_male_Addax_showing_as_the_power_of_his_horns.jpg",
    },
    {
      name: "Arabian oryx",
      continent: "Asia",
      weight: 150,
      height: 39,
      horns: "Straight",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_(oryx_leucoryx).jpg/1280px-Arabian_oryx_(oryx_leucoryx).jpg",
    },
    {
      name: "Bay duiker",
      continent: "Africa",
      weight: 40,
      height: 17,
      horns: "Spiky",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cephalophus_dorsalis.JPG/1920px-Cephalophus_dorsalis.JPG",
    },
  ];
  it("should prepare data for scatter plot", () => {
    expect(prepareScatterData(antelopes)).toEqual({
      Africa: [
        { x: 220, y: 41 },
        { x: 40, y: 17 },
      ],
      Asia: [{ x: 150, y: 39 }],
    });
  });

  const antelopes2 = [
    {
      name: "Addax",
      continent: "Africa",
      weight: 220,
      height: 41,
      horns: "Twisted",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/A_big_male_Addax_showing_as_the_power_of_his_horns.jpg/1280px-A_big_male_Addax_showing_as_the_power_of_his_horns.jpg",
    },
    {
      name: "Blackbuck",
      continent: "Asia",
      weight: 44,
      height: 29,
      horns: "Twisted",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Blackbuck-0006.jpg/1024px-Blackbuck-0006.jpg",
    },
    {
      name: "Bongo",
      continent: "Africa",
      weight: 500,
      height: 48,
      horns: "Spiraled",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tragelaphus_eurycerus_01.JPG/800px-Tragelaphus_eurycerus_01.JPG",
    },
  ];
  it("should prepare data for doughnut chart", () => {
    expect(prepareDoughnutData(antelopes2)).toEqual({
      Twisted: 2,
      Spiraled: 1,
    });
  });
});
