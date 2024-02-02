import { NavigationArray } from "@/lib/staticData";
import SideNavigationButton from "./SideNavigationButton";

export default function LeftSideBar() {
  return (
    <aside className="sticky h-screen w-full pl-2 hidden min-[1100px]:block" role="navigation">
      <div className="h-[91%] overflow-y-scroll scrolling">
        <nav className="mt-4">
          <ul>
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
        <div className="mt-2 py-2 border-t border-t-gray-50">
          <p className="text-2xs text-gray-500">
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
