function Footer() {

    return (
        <footer className="sticky top-full bg-white shadow dark:bg-gray-800 flex-1 h-10 margin">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center flex-1">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-100 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">&copy; Amit Kurud 2024</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;