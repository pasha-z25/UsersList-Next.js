import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";
import Pagination from "../../components/Pagination";
import { getDataFromApi } from "../../src/helpers";

export function Users(props) {
  const { data: users, total_pages, page } = props;
  return (
    <>
      <Header />
      <section className="py-4">
        <div className="container mx-auto">
          <h1 className="font-bold mb-8">Users page</h1>
          <div className="grid gap-4 grid-cols-3">
            {users.map(user => <UserCard key={user.id} user={user} />)}
          </div>
          <div className="py-4">
            <Pagination currentPage={page} totalPages={total_pages} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
};

export default Users;

export async function getServerSideProps(context) {
  const { query: { page = '1' } } = context;
  // const response = await fetch(`${API_URL}/api/users?page=${page}`);
  const data = await getDataFromApi(`/api/users?page=${page}`);

  return {
    props: {
      ...data,
    }
  }
}