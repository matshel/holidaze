// import AdminLinks from "../../components/admin/AdminLinks";

import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
// import ContactMessagesList from "../../components/admin/ContactMessagesList";
import AdminPanel from "./components/AdminPanel";

export default function AdminPage() {
  return (
    <Layout>
      <Head title="Admin" content="Admin hovedside" />
      <AdminPanel />
    </Layout>
  );
}
