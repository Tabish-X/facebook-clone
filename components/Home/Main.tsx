import CreatePostControl from "./CreatePostControl";
import StoriesSlider from "./stories/StoriesSlider";
import "swiper/css";

export default function Main() {
  return (
    <article
      role="Main"
      className="w-full max-w-[590px] h-full pt-6 mx-auto lg:ml-14 lg:mr-20"
    >
      <StoriesSlider />
      <section
        role="wrapper"
        className="w-full flex flex-col items-center mx-auto"
      >
        <div className="w-full max-w-[500px]">
          <CreatePostControl />
        </div>
      </section>
    </article>
  );
}
