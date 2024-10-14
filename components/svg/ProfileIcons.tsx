import Calendar from "./Calendar";
import CalendarSuccess from "./CalendarSuccess";
import Handshake from "./HandShake";
import Help from "./Help";
import ShareAndEarn from "./ShareAndEarn";
import ProfileStars from "./ProfileStars";
import QuestionAndAnswer from "./QuestionAndAnswer";
import ProfilePrivacy from "./ProfilePrivacy";
import ProfileLogout from "./ProfileLogout";

type Props = {
  icon: "handshake" | "calendar" | "help" | "share-and-earn" | "ProfileStars" | "QuestionAndAnswer" | "ProfilePrivacy" | "ProfileLogout";
};

export default function ProfileIcons({ icon }: Props) {
  switch (icon) {
    case "handshake":
      return <Handshake />;

    case "calendar":
      return <CalendarSuccess />;

    case "help":
      return <Help />;

    case "share-and-earn":
      return <ShareAndEarn />;

          case "ProfileStars":
            return <ProfileStars />;
            
              case "QuestionAndAnswer":
                return <QuestionAndAnswer />;

                  case "ProfilePrivacy":
                    return <ProfilePrivacy />;

                      case "ProfileLogout":
                        return <ProfileLogout />;
  }
}
