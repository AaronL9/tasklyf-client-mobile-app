import Calendar from "./Calendar";
import CalendarSuccess from "./CalendarSuccess";
import Handshake from "./HandShake";
import Help from "./Help";
import ShareAndEarn from "./ShareAndEarn";

type Props = {
  icon: "handshake" | "calendar" | "help" | "share-and-earn";
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
  }
}
