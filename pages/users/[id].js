import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getDataFromApi } from "../../src/helpers";

export function UserPage({ user }) {
  const { id, avatar, first_name, last_name, email } = user;

  return (
    <>
      <Header />
      <section className="py-4">
        <div className="container mx-auto">
          <h1 className="font-bold mb-8">User page</h1>
          <article id={id} className="card border rounded-xl p-4">
            <img src={avatar} alt={first_name} />
            <h2 className="font-bold my-4">{first_name} {last_name}</h2>
            <a href={`mailto:${email}`} target='_blank'>{email}</a>
          </article>
        </div>
      </section>
      <Footer />
    </>
  )
};

export default UserPage;

export async function getServerSideProps(context) {
  const { params: { id = '1' } } = context;
  const data = await getDataFromApi(`/api/users/${id}`);

  return {
    props: {
      user: data.data,
    }
  }
}