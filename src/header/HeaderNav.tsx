import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const HeaderNav = () => (
	<NavigationMenu.Root className="relative z-10 flex w-screen">
		<NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px] shadow-blackA4">
				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
						href="#"
					>
						VIEWER
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
						href="#"
					>
						Library
					</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>
);

export default HeaderNav;