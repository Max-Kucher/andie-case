

export default {
  async afterFindOne(event) {
    const { result, ...otherData } = event;

    // console.log(result, otherData)
  }
}
