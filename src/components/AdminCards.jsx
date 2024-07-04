import Aditya from "./admins/Aditya";
import Arya from "./admins/Arya";
import Divyanshu from "./admins/Divyanshu";
import Zaid from "./admins/Zaid";

const AdminCards = () => {
  return (
    <>
      {/* Admin Card 1 */}
      <Zaid />
      {/* Admin Card 2  */}
      <Divyanshu />
      {/* Admin Card 3  */}
      <Arya />
      {/* Admin Card 4 */}
      <Aditya />
    </>
  );
};

export default AdminCards;
