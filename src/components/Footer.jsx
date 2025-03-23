export default function Footer() {
    return (
        <div>
            {/* 分隔線 */}
            <hr className="my-6 w-full border-t-2 border-primary rounded-sm opacity-100" />

            <footer className="footer bg-gray-900 text-white py-6">
                <div className="flex justify-evenly items-center w-full">
                    {/* 追蹤我們 */}
                    <div className="footer-followUs">
                        <p className="font-extrabold">FOLLOW US</p>
                        <div className="flex items-center space-x-4">
                            <a href="#">
                                <img className="w-8 h-8" src="../../image/nn-icon-facebook.svg" alt="facebook" />
                            </a>
                            <a href="#">
                                <img className="w-8 h-8" src="../../public/image/nn-icon-instagram.svg" alt="instagram" />
                            </a>
                        </div>
                    </div>

                    {/* 聯絡我們 */}
                    <div className="footer-contactUs">
                        <p className="font-extrabold">CONTACT US</p>
                        <p className="text-gray-300">02 2732 1104</p>
                    </div>

                    {/* 版權聲明 */}
                    <div className="footer-copyRight">
                        <p className="text-center text-gray-400 opacity-60">
                            © 2006 - 2023 Copyright Digital Technology Design
                        </p>
                    </div>
                </div>

            </footer>
        </div>
    );
}
