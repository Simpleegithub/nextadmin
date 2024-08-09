

function page() {
    const handleform = async(fromdata) => {
        "use server";
        console.log("hello from server actions");
        const title=fromdata.get("title")
        console.log(title);
    }
  return (
    <div>
      <form action={handleform}>
        <input type="text" name='title'  />
        <button >Send</button>
      </form>
    </div>
  )
}

export default page
