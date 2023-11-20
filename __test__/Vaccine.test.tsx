import HospitalCatalog from "@/components/HospitalCatalog";
import { screen , render , waitFor } from "@testing-library/react"

const mockResult = {
    success: true,
    count: 3,
    data: [
        {
            "_id": "6534f6118c013957fb6da56e",
            "name":"Chulalongkorn Hospital",
            "address":"1873 Rama IV Rd",
            "district":"Pathum Wan",
            "province":"Bangkok",
            "postalcode":"10330",
            "tel":"026494000",
            "picture":"https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
            "__v":{"$numberInt":"0"}
        },
        {   
            "_id":"6534f6638c013957fb6da571",
            "name":"Rajavithi Hospital",
            "address":"2 Phaya Thai Rd, Thung Phaya Thai",
            "district":"Ratchathewi",
            "province":"Bangkok",
            "postalcode":"10400",
            "tel":"022062900",
            "picture":"https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
            "__v":{"$numberInt":"0"}
        },
        {
            "_id":"655adea577676cd7f04586b9",
            "name":"Thammasat University Hospital",
            "address":"95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
            "district":"Khlong Luang",
            "province":"Pathum Thani",
            "postalcode":"12120",
            "tel":"029269999",
            "picture":"https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
            "__v":{"$numberInt":"0"}
        }
    ]
}

describe("HospitalCatalog", () => {
    it("should have correct number of hospital images", async () => {
      const promiseMockResult = Promise.resolve(mockResult);
      const hospitalCatalog = await HospitalCatalog({
        hospitaljson: promiseMockResult,
      });
      render(hospitalCatalog);
  
      await waitFor(() => {
        const hospitalImages = screen.queryAllByRole("img");
        expect(hospitalImages.length).toBe(3);
      })
    })
  })