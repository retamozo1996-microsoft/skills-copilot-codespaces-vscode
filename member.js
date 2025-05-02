function skillMember() {
  return {
    name: "skillMember",
    description: "A member with a specific skill",
    type: 2,
    options: [
      {
        name: "skill",
        description: "The skill of the member",
        type: 3,
        required: true,
      },
    ],
  };
}