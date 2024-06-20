export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">© 2024 Keris Studios. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5H10a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2V7a2 2 0 00-2-2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 13H10M12 9V17" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3zm4.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM7.5 9h-3v9h3v-9zM21 14.25v-1.5c0-.83-.168-1.25-.75-1.25s-1.25.42-1.25 1.25v1.5h-2.25v-6h2.25v1.25c.337-.563 1.01-1.25 2.25-1.25 1.75 0 3 1.25 3 3.75v2.5h-2.25zm-6.75-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}