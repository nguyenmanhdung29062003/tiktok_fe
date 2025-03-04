import Header from '../DefaultLayout/Header';

function HeaderOnlyLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    );
}

export default HeaderOnlyLayout;
