
export default {
  async afterFindMany(event) {
    const { result, ...otherData } = event;

    console.log(result)
  }
}
