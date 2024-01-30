import Image from "next/image";
import styles from "./InvitedDashboardTable.module.scss";
import { MappedInvitations } from "@/types/invitations";
import noInvitationIcon from "@/public/icons/noInvitation.svg";
import SearchBar from "@/components/input/SearchBar";

const NO_INVITATION_ICON_SIZE = 100;

interface InvitedDashboardTableProps {
  totalCount: number;
  invitations: MappedInvitations;
}

const NoInvitation = () => {
  return (
    <div className={styles.noInvitation}>
      <Image
        src={noInvitationIcon}
        alt="No Invitation"
        width={NO_INVITATION_ICON_SIZE}
        height={NO_INVITATION_ICON_SIZE}
      />
      <span>아직 초대받은 대시보드가 없어요</span>
    </div>
  );
};

const InvitedDashboardTable = ({
  totalCount,
  invitations,
}: InvitedDashboardTableProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>초대받은 대시보드</div>
      {totalCount ? (
        <div className={styles.tableArea}>
          <SearchBar />
          <table className={styles.table}>
            <thead>
              <tr>
                <th>이름</th>
                <th>초대자</th>
                <th>수락 여부</th>
              </tr>
            </thead>
            <tbody>
              {invitations.map(invitation => (
                /** @TODO 수락/거절 버튼 컴포넌트 완성되면 적용하기 */
                <tr>
                  <td>{invitation.dashboard}</td>
                  <td>{invitation.inviter}</td>
                  <td>{invitation.inviteAccepted ? "수락" : "거절"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoInvitation />
      )}
    </div>
  );
};

export default InvitedDashboardTable;
