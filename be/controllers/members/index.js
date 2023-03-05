import { Masallah, Member, RamzanMember } from "models";

export const createMembersController = async (_request, response) => {
  try {
    await RamzanMember.deleteMany({});
    await Masallah.updateMany({}, { d1: "", d2: "", d3: "" });
    let memberData = await Member.find({});
    let ramzanMemberData = memberData.map(({ _id, hof_id }) => ({
      _id,
      member_details: _id,
      hof_id: hof_id.toString()
    }));
    let databaseResponse = await RamzanMember.insertMany(ramzanMemberData);
    return response.status(200).send(databaseResponse);
  } catch (error) {
    return response.status(500).send(error.message);
  }
};
