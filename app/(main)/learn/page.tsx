import { FeedWrapper } from "@/components/feedWrapper";
import { StickyWrapper } from "@/components/stickyWrapper";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                My Sticky sidebar
            </StickyWrapper>
            <FeedWrapper>
               My Feed

               
            </FeedWrapper>

        </div >
    );
};

export default LearnPage