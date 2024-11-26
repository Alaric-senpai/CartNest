import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/detail/product/product.component';
import { CarouselComponent } from './components/landing/carousel/carousel.component';
import { CategoryComponent } from './components/detail/category/category.component';
import { LostComponent } from './components/shared/lost/lost.component';
import { CategoriesComponent } from './components/detail/categories/categories.component';
import { CartComponent } from './components/detail/cart/cart.component';
import { DealsComponent } from './components/detail/deals/deals.component';
import { NewComponent } from './components/detail/new/new.component';
import { SignupComponent } from './components/user_related/signup/signup.component';
import { DashboardVendorComponent } from './vendors/dashboard-vendor/dashboard-vendor.component';
import { VendorDashComponent } from './vendors/vendor-dash/vendor-dash.component';
import { ProductListComponent } from './vendors/vendor-components/product-list/product-list.component';
import { NewProductComponent } from './vendors/vendor-components/new-product/new-product.component';
import { ProductsAnalyticsComponent } from './vendors/vendor-components/products-analytics/products-analytics.component';
import { ProductDetailsComponent } from './vendors/vendor-components/product-details/product-details.component';
import { ShopAnalyticsComponent } from './vendors/vendor-components/shop-analytics/shop-analytics.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './vendors/register/register.component';
import { authGuard } from './guards/auth.guard';
import { vendorGuard } from './guards/vendor.guard';
import { CartsComponent } from './components/detail/carts/carts.component';
import { customerGuard } from './guards/customer.guard';
import { shopGuard } from './guards/shop.guard';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { adminGuard } from './guards/admin.guard';
import { AdminDashboardComponent } from './admin/admin-components/admin-dashboard/admin-dashboard.component';
import { ShopApplicantsComponent } from './admin/admin-components/shop-applicants/shop-applicants.component';
import { DataViewComponent } from './admin/admin-components/data-view/data-view.component';
import { AdminSettingsComponent } from './admin/admin-components/admin-settings/admin-settings.component';
import { AdminProfileComponent } from './admin/admin-components/admin-profile/admin-profile.component';
import { CheckoutComponent } from './components/processing/checkout/checkout.component';
import { ProfileComponent } from './components/user_related/profile/profile.component';
import { ProfileHomeComponent } from './components/user_related/profile-home/profile-home.component';
import { OrdersComponent } from './components/user_related/orders/orders.component';
import { UserSettingsComponent } from './components/user_related/user-settings/user-settings.component';
import { AllProductsComponent } from './components/detail/all-products/all-products.component';
export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'CartNest shopping',
        children: [
            {
                path: '',
                component: CarouselComponent
            },
            {
                path: "product/:id",
                component: ProductComponent
            },
            {
                path: 'category/:id',
                component: CategoryComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                title: 'categories'
            },
            {
                path: 'cart/:id',
                component: CartComponent,
                title: "Cart",
                canActivate: [authGuard, customerGuard]
            },
            {
                path: 'carts',
                component: CartsComponent,
                title: 'My carts',
                canActivate: [authGuard, customerGuard]
            },
            {
                path: 'deals',
                component: DealsComponent,
                title: "Deals"
            },
            {
                path: 'new',
                title: 'New Products',
                component: NewComponent,
            },
            {
              path: 'checkout/:id/:type/:orderid',
              component: CheckoutComponent,
              title: 'Process my Order'
            },
            {
                path: 'products',
                component: AllProductsComponent,
                title: 'All products'
            }
        ]

    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate:[authGuard],
        children: [
            // {
            //     path: 'dashboard',
            //     component: ProfileHomeComponent,
            //     title: 'user dashboard'
            // },
            {
                path: 'orders',
                component: OrdersComponent,
                title: 'My orders',

            },
            {
                path: 'settings',
                component: UserSettingsComponent,
                title: 'Account settings'
            },
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: "full"
            }
        ]
    },
    {
        path: '',
        redirectTo : 'home',
        pathMatch: 'full'
    },
    {
        path: 'reset',
        component: ForgotPasswordComponent,
        title: 'Forgot password'
    },
    {
        path: 'login',
        component:LoginComponent,
        title: 'login'
    },
    {
        path: 'product/:id',
        redirectTo: 'home/product/:id',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'CartNest signup'
    },
    {
        path: 'vendor',
        component: DashboardVendorComponent,
        title: 'Vendor dashboard',
        canActivate: [authGuard, vendorGuard, shopGuard],
        children: [
            {
                path: 'dashboard',
                component: VendorDashComponent,
                title: 'Dashboard',

            },

            {
                path: 'list',
                component: ProductListComponent,
                title: 'My shop Products'
            },
            {
                path: 'newProduct',
                component: NewProductComponent,
                title: 'Add a new product'
            },
            {
                path: 'productAnalytics',
                component: ProductsAnalyticsComponent,
                title: 'Product Analytics'
            },
            {
                path: 'productDetails/:id',
                component: ProductDetailsComponent
            },
            {
                path: 'shopAnalytics',
                component: ShopAnalyticsComponent,
                title: "Shop analytics"
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'Shopregister',
        component: RegisterComponent,
        canActivate: [authGuard, vendorGuard],
        title: 'set up shop'
    },
    {
        path: 'admin',
        component: AdminHomeComponent,
        canActivate:[authGuard, adminGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch:'full'
            },
            {
                path: 'dashboard',
                component:AdminDashboardComponent,
                title:'Admin dashboard'
            },
            {
                path: 'vendors',
                component:ShopApplicantsComponent,
                title: 'Vendor registrations'
            },
            {
                path: 'dataview',
                component:DataViewComponent,
                title: 'System data view'
            },
            {
                path: 'settings',
                component: AdminSettingsComponent,
                title: 'Settings'
            },
            {
                path: 'profile',
                component: AdminProfileComponent,
                title: 'Profile'
            }
        ]

    },
    {
        path: '**',
        component: LostComponent,
        title: 'Invalid request'
    }
];
