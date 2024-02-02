import SideNavigationButton from "@/components/Home/SideNavigationButton";
import { NavigationArray } from "@/lib/staticData";

export default function LeftSideBar() {
  return (
    <aside className="relative top-14 left-0 h-full w-full pl-2 overflow-hidden z-[1]" role="navigation">
      <div className="h-full w-full">
        <nav className="mt-4">
          <ul className="pr-2">
            {NavigationArray.map(({ link, text, image }) => (
              <SideNavigationButton
                link={link}
                text={text}
                image={image}
                key={text}
              />
            ))}
          </ul>
        </nav>
        <div className="py-3 px-4">
            <div className="w-full border-t border-t-gray-50 mb-3"></div>
          <p className="text-xs text-gray-500">
            <a
              href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
              target="_blank"
              className="text-gray-30 hover:underline"
            >
              Privacy •
            </a>
            &nbsp;
            <a
              href="https://www.facebook.com/legal/terms/update"
              target="_blank"
              className="text-gray-30 hover:underline"
            >
              Terms •
            </a>
            &nbsp;
            <a
              href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
              target="_blank"
              className="text-gray-30 hover:underline"
            >
              Advertising •
            </a>
            &nbsp;
            <a
              href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
              target="_blank"
              className="text-gray-30 hover:underline"
            >
              Ad Choice •
            </a>
            &nbsp;
            <a
              href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
              target="_blank"
              className="text-gray-30 hover:underline"
            >
              Cookies •
            </a>
            &nbsp;
            <a
              href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
              target="_blank"
              className="text-gray-30 hover:underline"
            >
              More •
            </a>
            &nbsp;
            <span className="text-gray-30 hover:underline">
              Tabish &copy; {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
}
