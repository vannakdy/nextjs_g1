import Link from "next/link";
import styles from "../../../styles/component/Header.module.css"
// import "../../../public/css/reset.min.css";
// import "../../../public/css/style.min.css";
// import "../../../public/css/boxicons.min.css";
const Header = () => {

    return (
        <div>
            <body>
            <header class="header" id="header">
            <div class="wrapper container">
                <div class="wrapper-left">
                    <a href="./index.html" class="brand">Brand</a>
                </div>
                <div class="wrapper-center">
                    <span class="overlay"></span>
                    <nav class="navbar" id="navbar">
                        <div class="menu-header">
                            <span class="menu-arrow"><i class="bx bx-chevron-left"></i></span>
                            <span class="menu-title"></span>
                        </div>
                        <ul class="menu-inner">
                            <li class="menu-item"><a href="#" class="menu-link">Home</a></li>
                            <li class="menu-item menu-dropdown">
                                <span class="menu-link">Collection<i class="bx bx-chevron-right"></i></span>
                                <div class="submenu megamenu megamenu-column-4">
                                    <div class="submenu-inner">
                                        <h4 class="submenu-title">Men</h4>
                                        <ul class="submenu-list">
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                        </ul>
                                        <h4 class="submenu-title">Kids</h4>
                                        <ul class="submenu-list">
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                        </ul>
                                    </div>
                                    <div class="submenu-inner">
                                        <h4 class="submenu-title">Women</h4>
                                        <ul class="submenu-list">
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                        </ul>
                                        <h4 class="submenu-title">Beauty</h4>
                                        <ul class="submenu-list">
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                        </ul>
                                    </div>
                                    <div class="submenu-inner">
                                        <h4 class="submenu-title">Healthy</h4>
                                        <ul class="submenu-list">
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                            <li class="submenu-item"><a href="#" class="submenu-link">Product Name</a></li>
                                        </ul>
                                    </div>
                                    <div class="submenu-inner">
                                        <img class="submenu-image" src="../../../assets/product-05.jpg" alt="product"/>
                                    </div>
                                </div>
                            </li>
                            <li class="menu-item menu-dropdown">
                                <span class="menu-link">New Arrival<i class="bx bx-chevron-right"></i></span>
                                <div class="submenu megamenu megamenu-column-4">
                                    <div class="submenu-inner">
                                        <a href="#" class="submenu-link">
                                            {/* <img class="submenu-image" src="./assets/product-01.jpg" alt="product"> */}
                                            <span class="submenu-title">New Product</span>
                                        </a>
                                    </div>
                                    <div class="submenu-inner">
                                        <a href="#" class="submenu-link">
                                            {/* <img class="submenu-image" src="./assets/product-02.jpg" alt="product"> */}
                                            <span class="submenu-title">New Product</span>
                                        </a>
                                    </div>
                                    <div class="submenu-inner">
                                        <a href="#" class="submenu-link">
                                            {/* <img class="submenu-image" src="./assets/product-03.jpg" alt="product"> */}
                                            <span class="submenu-title">New Product</span>
                                        </a>
                                    </div>
                                    <div class="submenu-inner">
                                        <a href="#" class="submenu-link">
                                            {/* <img class="submenu-image" src="./assets/product-04.jpg" alt="product"> */}
                                            <span class="submenu-title">New Product</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="menu-item menu-dropdown">
                                <span class="menu-link">Company<i class="bx bx-chevron-right"></i></span>
                                <div class="submenu megamenu megamenu-column-1">
                                    <ul class="submenu-list">
                                        <li class="submenu-item"><a href="#" class="submenu-link">About Us</a></li>
                                        <li class="submenu-item"><a href="#" class="submenu-link">Articles</a></li>
                                        <li class="submenu-item"><a href="#" class="submenu-link">Career</a></li>
                                        <li class="submenu-item"><a href="#" class="submenu-link">Contact</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item"><a href="#" class="menu-link">Account</a></li>
                            <li class="menu-item"><a href="#" class="menu-link">Support</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="wrapper-right">
                    <a href="#" class="menu-icon"><i class="bx bx-search"></i></a>
                    <a href="#" class="menu-icon"><i class="bx bx-heart"></i></a>
                    <a href="#" class="menu-icon"><i class="bx bx-cart"></i></a>
                    <div class="burger" id="burger">
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                    </div>
                </div>
            </div>
	    </header>


	<script defer src="./public/js/script.js"></script>
</body>
        </div>
    )
}

export default Header;