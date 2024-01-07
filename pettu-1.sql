-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 04, 2024 lúc 04:40 AM
-- Phiên bản máy phục vụ: 10.11.2-MariaDB
-- Phiên bản PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `pettu`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `billid` int(11) NOT NULL,
  `userid` int(20) DEFAULT NULL,
  `payment_method` varchar(20) DEFAULT NULL,
  `total_price` float DEFAULT NULL,
  `status` int(4) DEFAULT 0,
  `payment_status` int(4) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`billid`, `userid`, `payment_method`, `total_price`, `status`, `payment_status`, `created_at`, `updated_at`) VALUES
(182, 19, 'COD', 595000, 0, 0, '2024-01-02 04:10:24', '2024-01-02 10:10:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `billdetail`
--

CREATE TABLE `billdetail` (
  `billdetail_id` int(11) NOT NULL,
  `productid` int(20) DEFAULT NULL,
  `billid` int(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `billdetail`
--

INSERT INTO `billdetail` (`billdetail_id`, `productid`, `billid`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(1, 3, 182, 1, 595000, '2024-01-02 04:10:24', '2024-01-02 10:10:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog`
--

CREATE TABLE `blog` (
  `id` int(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `user_id` int(20) DEFAULT 0,
  `blog_category_id` int(20) DEFAULT 0,
  `content` text DEFAULT NULL,
  `view_count` int(20) DEFAULT 0,
  `comment_count` int(20) DEFAULT 0,
  `thumbnail` varchar(200) DEFAULT NULL,
  `descr` text DEFAULT NULL,
  `author` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `blog`
--

INSERT INTO `blog` (`id`, `title`, `slug`, `user_id`, `blog_category_id`, `content`, `view_count`, `comment_count`, `thumbnail`, `descr`, `author`, `created_at`, `update_at`) VALUES
(1, 'Các vấn đề thường gặp khi chăm sóc chó già', 'cac-van-de-thuong-gap-khi-cham-soc-cho-gia', 7, 1, 'Thật sự không có một độ tuổi chính xác để xác định chó của bạn đã “về già” hay chưa. Tuy nhiên, theo ý kiến của các bác sỹ thú y thì chó già là những con chó đang sống trong 1/3 những năm cuối của một con chó.', 10, 5, '/images/blog/blog-1.jpg', 'Sau giai đoạn trưởng thành, chó sẽ bắt đầu sang giai đoạn cao tuổi. Ở giai đoạn này, mõm của chó sẽ chuyển sang màu xám. Chó sẽ di chuyển chậm hơn và thích thú đi dạo hơn. Những chú chó lớn tuổi có thể ăn ít hơn và ngủ nhiều hơn', 'Nguyễn Ngọc', '2023-11-01 10:54:33', '2023-11-02 10:54:33'),
(2, 'Bệnh Parvo ở chó ', 'benh-parvo-o-cho', 7, 1, 'Canine parvovirus (còn gọi là bệnh parvo ở chó) là một bệnh virus rất dễ lây lan và có khả năng gây tử vong ở chó. Thông thường nhất, Parvovirus gây viêm dạ dày ruột hoặc viêm dạ dày và ruột. Bệnh Parvovirus dễ lây lan và có thể tồn tại trong vài tháng (một số chuyên gia nói rằng lâu nhất là hai năm) trong môi trường và nó cũng có khả năng chống lại nhiều chất khử trùng. Sự lây nhiễm có thể xảy ra trực tiếp khi tiếp xúc với những con chó bị nhiễm bệnh, nhưng nó cũng lây lan khi tiếp xúc gián tiếp với các bề mặt và đồ vật bị ô nhiễm.', 5, 0, '/images/blog/blog-2.jpg', 'Ở độ tuổi nào chó cũng có thể bị dại, ngay cả khi mới đẻ hoặc đang bú mẹ thì chó cũng có nguy cơ bị dại. Chúng bị lây virus qua nguồn sữa mẹ và phát bệnh từ 1-2 tuần. Vì vậy khi nuôi chó thì bạn cần chú ý theo dõi để tiêm phòng chó nhà nhé.', 'Xuân Thành', '2023-11-02 10:58:09', '2023-11-03 10:58:09'),
(3, 'FIP – Viêm phúc mạc truyền nhiễm ở mèo', 'fip-viem-phuc-mac-truyen-nhiem-omeo', 7, 2, 'Viêm phúc mạc ở mèo (FIP) là bệnh lý nguy hiểm có tỉ lệ tử vong rất cao gây ra bởi Coronavirus. Chủng virus này tồn tại ở cả thể khô và ướt. Mèo bị nhiễm Coronavirus thường không có triệu chứng trong thời gian nhiễm virus ban đầu. Bệnh FIP không thể chữa khỏi mà chỉ có thể ngăn chặn kịp thời sự lây lan.\r\n\r\nBệnh có thể lây truyền qua tiếp xúc giữa những chú mèo và khi tiếp xúc với phân. Virus có thể sống trong môi trường đến vài tuần và có nguy cơ truyền lây qua nhau thai khi mèo mẹ mang thai, qua sữa sang con của chúng. Thường là khi mèo con giữa 5 và 8 tuần tuổi.', 12, 3, '/images/blog/blog-3.jpg', '\r\nBệnh có thể lây truyền qua tiếp xúc giữa những chú mèo và khi tiếp xúc với phân. Virus có thể sống trong môi trường đến vài tuần và có nguy cơ truyền lây qua nhau thai khi mèo mẹ mang thai, qua sữa sang con của chúng. Thường là khi mèo con giữa 5 và 8 tuần tuổi.', 'Văn Nghĩa', '2023-11-02 11:00:56', '2023-11-03 11:00:56'),
(4, 'Lý do mèo lười ăn và công thức làm pate tươi cho mèo', 'meo-luoi-an-va-cach-lam-pate-tuoi', 7, 2, 'Mèo lười ăn là trường hợp rất phổ biến ở các bé mèo. Giống như trẻ em, mèo rất bướng bỉnh, kén ăn và hay ăn vạ. Tuy nhiên, sẽ còn tùy thuộc vào từng trường hợp cũng như biểu hiện của mèo để bạn có thể xác định nguyên nhân mèo lười ăn và cách khắc phục hiệu quả.', 3, 2, '/images/blog/blog-4.jpg', 'Loài mèo cũng trải qua những giai đoạn sinh, bệnh, lão, tử như con người. Ở mỗi giai đoạn khác nhau, chế độ dinh dưỡng và tình trạng sức khỏe của mèo lại khác nhau. Cùng với đó, bạn cần lưu ý kết hợp tạo thói quen tốt trong sinh hoạt hàng ngày cho mèo. Dưới đây là những kiến thức về chế độ dinh dưỡng và cách huấn luyện thói quen tốt cho mèo.', 'Thanh Thông', '2023-11-02 11:02:14', '2023-11-03 11:02:14'),
(5, 'Cách sử dụng nhỏ gáy Advocate cho chó phòng ngừa và điều trị nội & ngoại kí sinh trùng', 'cach-su-dung-nho-gay-advocate-cho-cho-phong-ngua-va-dieu-tri-noi-ngoai', 7, 1, 'Advocate là thuốc nhỏ gáy tại chỗ dễ dàng sử dụng, Advocate được dùng hàng tháng để nhanh chóng loại bỏ bọ chét, ngăn ngừa bệnh giun tim và bệnh spirocercosis, đồng thời bảo vệ chó của bạn khỏi hầu hết các loài giun đường ruột bao gồm giun đũa, giun móc và giun tóc.Cũng hỗ trọ trong việc ngăn ngùa sán dây bọ chét. Điều trị và kiểm soát ngăn ngừa ghẻ Demodex, Sarcoptec ở chó.', 5, 3, '/images/blog/blog-5.jpg', 'Bạn có thể tìm thấy các loại Thuốc trị ve chó, trị rận, diệt bọ chét ở chó tại Pet Mart. ', 'Đức Phúc', '2023-11-01 20:39:49', '2023-11-02 20:39:49'),
(6, '5 điều cần biết về lịch tẩy giun cho chó đúng cách', 'tay-giun-cho-cho', 7, 1, 'Tầm quan trọng của việc tẩy giun cho chó: Vì sao tẩy giun là quan trọng? Giun là loài ký sinh trùng có khả năng gây hại cho sức khỏe của chó. Chúng có thể sinh sôi nảy nở và lây lan nhanh chóng, ảnh hưởng tới chức năng tiêu hóa và sức đề kháng của chó.\r\nThời điểm tẩy giun: Lúc cún con đạt độ tuổi 2-3 tuần, đây là thời điểm tốt nhất để bắt đầu quá trình xổ giun, ngăn chặn sự lây lan của trứng giun.\r\nLưu ý khi tẩy giun: Thử nghiệm trước khi tẩy giun cho cả đàn, hãy thử nghiệm với một chú cún để đảm bảo không có phản ứng không mong muốn. Kết hợp đồng thời với lịch tiêm phòng, bạn cần lưu ý lịch tiêm phòng để đảm bảo việc tẩy giun và tiêm phòng cho chó không xảy ra cùng một lúc.', 10, 2, '/images/blog/blog-6.jpg', ' Để đảm bảo sức khỏe tốt nhất cho thú cưng của bạn, việc hiểu rõ lịch tẩy giun cho chó con và chó trưởng thành là điều không thể thiếu.', 'Lê Hương', '2023-10-01 20:39:49', '2023-11-08 20:39:49'),
(7, '10 điều cần biết về chó Alaskan Malamute (chó Alaska)', 'cho-alaskan-malamute', 7, 1, 'Bắt nguồn từ Bắc Cực: Alaskan Malamute là giống chó kéo xe trượt tuyết cổ xưa từ vùng Bắc Cực, với lịch sử kéo dài hàng ngàn năm. Khác với giống chó Siberian Husky, chó Alaskan Malamute với sức mạnh và sức chịu đựng đã giúp chúng vận chuyển phục vụ cho những công việc kéo tải trọng nặng hơn với những quãng đường xa.\r\nCông dụng trong lịch sử: Những chú chó Alaska đã giúp con người trong nhiều sự kiện lịch sử, từ cuộc sốt vàng ở Alaska, thám hiểm Nam Cực, cho đến việc hỗ trợ quân đội trong Thế chiến thứ II.\r\nTên gọi: Giống chó này được đặt theo tên của người Mahlemut, người đã yêu thích và nuôi dưỡng chúng ở Alaska.\r\nCông nhận và phổ biến: Mặc dù giống chó này đã gặp nhiều khó khăn sau chiến tranh, nhưng hiện tại, chúng vẫn được yêu thích và đứng ở vị trí thứ 67 trên danh sách các giống chó phổ biến của Câu lạc bộ Chó kiểng Hoa Kỳ (AKC ). Năm 2010, chó Alaskan Malamute trở thành biểu tượng của tiểu bang Alaska.', 3, 1, '/images/blog/blog-7.jpg', ' Để có một chú chó Alaska khỏe mạnh và vui vẻ, hãy đảm bảo bạn có đủ kiến thức và sẵn lòng dành thời gian cho việc huấn luyện, tập luyện và cách chăm sóc chúng.', 'Gia Phúc', '2023-10-04 20:39:49', '2023-10-01 20:39:49'),
(8, '3 lý do hãy dừng lại nếu bạn đang cho chó ăn chay', 'cho-an-chay', 7, 1, 'Xin khẳng định chó mèo không ăn chay\r\nThời gian gần đây chúng tôi có nhận được khá nhiều những ý kiến tranh luận về việc: Chó có ăn chay được không? Ăn với hàm lượng như thế nào? Thời gian kéo dài ra sao? Và đặc biệt là có ý kiến còn khẳng định rằng chó ăn chay 4 ngày, 8 ngày mà vẫn khỏe mạnh bình thường.\r\n\r\nTheo Tiến sĩ Lisa Weeth, một chuyên gia dinh dưỡng thú y, nói rằng: Bà thường không khuyến cáo chế độ cho chó ăn chay. Vấn đề về dinh dưỡng của chó  dù là thịt hoặc thực vật cũng cần phải cung cấp đủ dưỡng chất thiết yếu một cách cân bằng. Đảm bảo cho sự phát triển toàn diện của thú cưng. Đặc biệt là trong độ tuổi từ 2 – 15 tháng đầu đời. Điều này gần như không thể với chế độ cho chó ăn chay hoàn toàn.', 10, 5, '/images/blog/blog-8.jpg', 'Hãy dừng ngay lại việc cho chó ăn chay hoặc rau củ quả với hàm lượng lớn trong một thời gian dài. Tại sao bạn phải cho chó ăn thịt cá? Hãy chia sẻ nếu bạn là người yêu chó chân chính. .', 'Hoàng Hoàng', '2023-10-01 20:39:49', '2023-10-02 20:39:49'),
(9, 'BÚI LÔNG TRÊN MÈO: NGUY HIỂM HAY KHÔNG?', 'bui-long-tren-meo-nguy-hiem-hay-khong', 7, 2, 'Phải làm gì khi mèo bị búi lông?\r\nẮt hẳn khi bắt gặp chú mèo nhà mình trông khỗ sở và đau khi nôn búi lông, các Sen sẽ rất lo lắng và muốn hỗ trợ ngay để Boss có thể hết tình trạng trên một cách nhanh nhất. Nhưng cách tốt nhất hơn cả là bạn nên để cho mèo có một ít không gian để hoàn tất việc nôn. Việc cản trở có thể quá trình này có thể gây stress cho mèo hơn.\r\n\r\n', 3, 1, '/images/blog/blog-1.jpg', 'Búi lông là sự tổng hợp giữa lông rụng và dịch da dày hợp thành ở dạ dày mèo.', 'Mẫn Mẫn', '2023-11-01 21:07:28', '2023-11-02 21:07:28'),
(10, 'Top giống mèo thân thiện với trẻ em', 'top-giong-meo-than-thien-voi-tre-em', 7, 2, 'Mèo Maine Coon\r\n\r\nMột trong những giống mèo được yêu thích nhất ở Mỹ, Maine Coon cũng là một trong những con mèo đồng hành với người lâu nhất. Làm việc cùng nhau trong các trang trại của những người định cư đầu tiên, mèo Maine Coon đã có rất nhiều thời gian để tìm hiểu và thích nghi với nhu cầu của con người. Maine Coon kiên nhẫn với trẻ em hiếu động, chúng có thể giúp làm dịu một đứa trẻ có bản tính “sáng nắng chiều mưa” trở nên điềm tĩnh hơn, đồng thời đứa trẻ cũng vận động thể dục nhiều hơn nhờ chơi với mèo Maine Coon. Maine Coon cũng là một người bạn tuyệt vời trong những đêm mùa đông dài và yên tĩnh.', 3, 2, '/images/blog/blog-2.jpg', 'Top những chú mèo thân thiện nhất đây.', 'Cẩm Hoa', '2023-10-01 21:07:28', '2023-10-04 21:07:28'),
(11, 'Top giống mèo quấn chủ như chó', 'top-giong-meo-quan-chu-nhu-cho', 7, 2, 'Giống mèo Manx nổi tiếng là không có đuôi. Nhưng còn một điều đặc biệt nữa là chúng rất tình cảm và thân thiện. Nhiều người gọi Manx là \"mèo - chó vì nó luôn khao khát ở gần mọi người. Nó thậm chí sẽ chạy đến ngay cạnh bạn khi nghe huýt sáo hoặc gọi tên. và thực sự chấp hành mệnh lệnh cấm “Không” rất nghiêm túc, khác với các giống mèo khác chỉ ngồi ở đó và nhìn chằm chằm khi nghe chủ gọi.', 4, 1, '/images/blog/blog-3.jpg', 'Đúng rồi: con mèo rất buồn cười. Đôi khi, bạn có thể cười sảng khoái với người bạn thân lông bông của mình về độ nghịch ngợm và những việc anh ấy làm.', 'Tú Bình', '2023-10-04 21:07:28', '2023-10-11 21:07:28'),
(12, 'Chỉ từng bước cách cắt móng cho mèo dễ dàng', 'cat-mong-cho-meo', 7, 2, 'Bao lâu thì bạn nên cắt móng cho mèo? Phần lớn mèo nuôi trong nhà cần cắt móng mỗi tuần. Đối với mèo con, vì móng của chúng mọc nhanh, việc cắt móng có thể cần thực hiện 1 tuần 1 lần. Tuy nhiên, một số mèo trưởng thành chỉ cần cắt móng mỗi tháng. Đối với mèo sống bên ngoài, móng sắc là một phần quan trọng giúp chúng tự vệ, nên việc cắt móng có thể chỉ cần thiết vài lần mỗi năm.', 2, 1, '/images/blog/blog-4.jpg', 'Cắt móng cho mèo không chỉ giúp giữ cho đồ vật trong nhà của bạn khỏi bị trầy xước mà còn là một phần quan trọng của việc chăm sóc sức khỏe của miu cưng.', 'Tú Nhi', '2023-10-09 21:07:28', '2023-10-10 21:07:28'),
(13, 'Rạp phim tại Thái Lan cho phép thú cưng vào cùng chủ nuôi', 'rap-phim-tai-thai-lan-cho-phep-thu-cung-vao-cung-chu-nuoi', 7, 3, 'Hàng chục người đi xem phim với những chú bé bốn chân đã đến bằng xe đẩy để ghé khai trương rạp chiếu phim thân thiện với vật nuôi đầu tiên tại Thái Lan ở ngoại ô thủ đô Bangkok\r\nMột chú mèo lông trắng muốt trong bộ váy màu vàng ngồi trên tay ghế một rạp chiếu phim ở Bangkok', 3, 3, '/images/blog/blog-5.jpg', 'Bốn chân cùng Bắp rang: Rạp phim Thái Lan thân thiện với thú cưng. Đây là rạp chiếu phim đầu tiên tại thái lan làm điều này.', 'Yến Nhi', '2023-09-01 21:15:30', '2023-09-08 21:15:30'),
(14, 'Gần 100 mèo quý tộc \"đọ sắc\" tại cuộc thi mèo lớn nhất Việt Nam', 'gan-100-meo-quy-toc-do-sac-tai-cuoc-thi-meo-lon-nhat-viet-nam', 7, 3, 'Cuộc thi mèo có 4 phần. Trong đó, phần 1 là phần thi chấm tại bàn. Tại phần thi này, giám khảo đánh giá cụ thể về hình thể của từng con mèo theo tiêu chuẩn của Liên đoàn Mèo Thế giới. Phần 2 là phần thi dành cho mèo trưởng thành. Phần 3 dành cho mọi giống mèo để chọn ra con mèo đẹp nhất chiếu theo tiêu chuẩn giống mèo của Liên đoàn Mèo Thế giới.', 3, 2, '/images/blog/blog-6.jpg', 'Trong ngày 28-10, hàng trăm người đưa mèo đến tham gia cuộc thi mèo do Hội bảo vệ Động vật Việt Nam - Liên chi hội Mèo Việt Nam tổ chức.', 'Thanh Trúc', '2023-10-28 21:15:30', '2023-10-29 21:15:30'),
(15, 'Thú cưng được nhận thức ăn, khám sức khỏe miễn phí', 'thu-cung-duoc-nhan-thuc-an-kham-suc-khoe-mien-phi', 7, 3, 'Chương trình Ngày hội thú cưng được tổ chức thường niên tại Công viên Văn hóa Đầm Sen (quận 11, TP HCM). Đây là chương trình mang ý nghĩa cộng đồng thông qua việc gây quỹ từ cuộc thi chó và mèo đẹp.Đây là lần thứ 4 tổ chức, anh Đoàn Minh Thuận - Chủ tịch CLB Show Dog Kennel Việt Nam, đại diện Ban tổ chức, cho biết mỗi con vật tham gia dự thi sẽ đóng lệ phí là 79.000 đồng', 4, 2, '/images/blog/blog-7.jpg', 'Hơn 3000 con chó, mèo được chơi trò chơi, khám sức khỏe miễn phí và nhận những phần thức ăn dinh dưỡng trong Ngày hội thú cưng tại TP HCM.', 'Hoàng Thanh', '2023-10-03 21:15:30', '2023-10-04 21:15:30'),
(16, 'Chó mèo của các Idol nổi tiếng', 'cho-meo-cua-cac-idol-noi-tieng', 7, 3, 'Ở thời điểm hiện tại chắc chắn không ai còn thấy xa lạ với câu nói “ Người yêu có thể không có nhưng chó thì phải có một con”, những sinh vật đáng yêu này khiến chúng ta cảm thấy yêu đời hơn, xét cả về khía cạnh khoa học khi chúng ta âu yếm thú cưng sẽ khiến hormone hạnh phúc tăng tiết. Trong bài viết này chúng ta hãy cùng xem thử liệu những Idol của chúng ta nuôi loại thú cưng nào nhé, bạn cũng sẽ bất ngờ về độ cưng chiều thú cưng của thần tượng nhà mình đó. Còn bây giờ hãy cùng đi và tìm hiểu nào!', 0, 0, '/images/blog/blog-8.jpg', 'Trở thành Petfluence cả triệu follow, có chú mèo sở hữu tài sản gần trăm triệu đô. Thật kì lạ phải không?', 'Hoàng Quỳnh', '2023-10-02 21:15:30', '2023-11-01 21:15:30'),
(17, '\'Đệ nhất khuyển\' của Tổng thống Biden lại gây rắc rối ở Nhà Trắng', 'de-nhat-khuyen-cua-tong-thong-biden-lai-gay-rac-roi-o-nha-trang', 7, 3, 'Commander, chú chó bẹc-giê (chó chăn cừu Đức) đến Nhà Trắng lần đầu vào năm 2021 khi vẫn còn nhỏ, sẽ phải trải qua một đợt huấn luyện mới sau ít nhất 10 sự cố, trong đó có một vụ khiến nạn nhân phải nhập viện, theo truyền thông Mỹ.\r\n\r\nTrích dẫn các email ở Cơ quan Mật vụ Mỹ, CNN cho biết trong một sự cố, Đệ nhất phu nhân Mỹ Jill Biden đã \"không thể kiểm soát\" con vật khi nó xông vào cắn một nhân viên mật vụ. ', 4, 3, '/images/blog/blog-1.jpg', 'Vấn đề về thú cưng lại khiến Tổng thống Mỹ Joe Biden đau đầu, sau khi con chó tên Commander của ông được cho là liên quan đến một số vụ cắn người, bao gồm tại Nhà Trắng.', 'Hữu Thịnh', '2023-10-01 21:15:30', '2023-11-02 21:15:30'),
(18, 'Chăm sóc thú cưng thoải mái với máy lọc không khí khử mùi Meliwa', 'cham-soc-thu-cung-thoai-mai-voi-may-loc-khong-khi-khu-mui-meliwa', 7, 3, 'Chó, mèo thường gặp các bệnh về da như ghẻ, viêm da, mò bao lông…\r\nThú cưng dễ mắc các bệnh về tai, miệng như nhiễm trùng khoang miệng, bệnh tiểu đường hoặc sâu răng, dễ gây mùi hôi.\r\nChó khi chúng liếm quanh cơ thể sẽ khiến mùi hôi bị khuếch tán vì có tuyến hôi gần hậu môn.', 4, 2, '/images/blog/blog-2.jpg', 'Bạn có phải là một người yêu thích thú cưng nhưng lại thường xuyên cảm thấy mệt mỏi với việc phải thường xuyên dọn dẹp lông thú hay cảm thấy mùi của chúng có thể làm bạn khó chịu? ', 'Văn Khánh', '2023-11-01 21:15:30', '2023-11-02 21:15:30'),
(19, '4 lưu ý sau khi bị mèo cắn', 'luu-y-sau-khi-bi-meo-can', 7, 4, 'Rửa vết thương ngay khi bị cắn\r\n\r\nBộ Y tế hướng dẫn người dân rửa kỹ các vết thương dưới vòi nước chảy trong vòng 15 phút với xà phòng hoặc nước sạch khi bị chó mèo cắn, cào hoặc có nguy cơ phơi nhiễm. Sau đó, người dân sát khuẩn vết thương bằng cồn 45-70 độ hoặc cồn iốt nhằm giảm thiểu lượng virus dại tại vết cắn.', 4, 2, '/images/blog/blog-3.jpg', 'Giới chức nhận định nguyên nhân chủ yếu là người dân chủ quan phòng bệnh, không tiêm vaccine sau khi bị con vật cắn.', 'Tuấn Tú', '2023-11-03 11:27:04', '2023-11-04 11:27:04'),
(20, 'Cuộc thi sắc đẹp mèo ở TP HCM', 'cuoc-thi-sac-dep-meo-o-tp-hcm', 7, 4, 'Rửa vết thương ngay khi bị cắn', 2, 1, '/images/blog/blog-8.jpg', 'Hơn 100 chú mèo ở Việt Nam và nước ngoài đã được chủ nhân mang đến cuộc thi mèo đẹp (Cat Show) do Liên chi hội mèo Việt Nam tổ chức ở quận 7, TPHCM, trong hai ngày 28 và 29/10.', 'Văn Tin', '2023-10-30 11:27:04', '2023-11-02 11:27:04'),
(21, 'Mèo hoang trở thành nhân viên bảo vệ ở Philippines', 'meo-hoang-tro-thanh-nhan-vien-bao-ve-o-philippines', 7, 4, 'So với chó, mèo không có kỹ năng canh gác và thường ngủ trong \"ca làm\", song sự dễ thương của loài vật này đã khiến các nhân viên bảo vệ quý mến.\r\n\r\nConan được giải cứu khi mới vài tuần tuổi ở bãi đậu xe tòa nhà và lập tức \"nhận việc\" sau khi Mingming, mèo bảo vệ tiền nhiệm, chết vì bệnh. \"Nếu Conan không có ở đây, tôi sẽ không có động lực làm việc. Con mèo làm tôi bớt căng thẳng\", Aljon Aquino, bảo vệ 30 tuổi, nói.\r\n\r\n', 3, 2, '/images/blog/blog-1.jpg', 'Giữa cuộc họp giao ca của bảo vệ khu phức hợp văn phòng ở Manila, một con mèo mặc đồng phục vàng đen lững thững bước qua các nhân viên đang xếp hàng.\r\n\r\n', 'Thanh Thanh', '2023-11-01 11:27:04', '2023-11-02 11:27:04'),
(22, 'Lười chậm chạp thoát vuốt mèo gấm Ocelot', 'luoi-cham-chap-thoat-vuot-meo-gam-ocelot', 7, 4, 'Nổi tiếng là sinh vật sống trên cây và di chuyển chậm, lười thường được cho là dễ dàng thua bất cứ kẻ săn mồi nào khi ở dưới mặt đất. Bẫy camera ở vùng hoang dã Amazon đã cung cấp thước phim hiếm hoi về một cuộc đụng độ như vậy, và thước phim gây ngạc nhiên khi cho thấy cách lười chống trả và thoát khỏi mèo gấm Ocelot, Science Alert hôm 10/8 đưa tin.', 5, 2, '/images/blog/blog-6.jpg', 'Bẫy camera ở vùng hoang dã Amazon ghi lại video hiếm hoi về cách lười hai ngón Nam Mỹ thoát khỏi kẻ săn mồi nhanh nhẹn là mèo gấm Ocelot.', 'Hòa Tín', '2023-11-02 11:27:04', '2023-11-03 11:27:04'),
(23, 'Chuyện đó đây: Bị khởi tố vì ngược đãi hàng chục con mèo', 'chuyen-do-day-bi-khoi-to-vi-nguoc-dai-hang-chuc-con-meo', 7, 4, 'Trước đó, cảnh sát nhận tin báo và tiến hành khám xét nhà của Matthew và Leah Cowen. \r\nTại đây, họ phát hiện khoảng 25 con mèo \"bị thương tích trầm trọng\", trong đó có 4 con đã chết. Người tố cáo ẩn danh trình báo rằng có khoảng 30 con mèo ở bãi đậu xe của cặp đôi trên và khu vực đó có mùi kinh khủng. Người này đôi khi còn thấy họ ném xác mèo vào thùng rác. \r\n\r\n', 2, 1, '/images/blog/blog-1.jpg', 'Đài LEX18 ngày 11.11 đưa tin một cặp đôi tại thị trấn Kevil (hạt Ballard, bang Kentucky, Mỹ) vừa bị bắt và bị khởi tố về hành vi ngược đãi động vật.', 'Thanh Tín', '2023-11-08 11:27:04', '2023-11-09 11:27:04'),
(24, 'Ngắm những con mèo giá cả trăm triệu, đi máy bay từ nước ngoài về Việt Nam', 'ngam-nhung-con-meo-gia-ca-tram-trieu-di-may-bay-tu-nuoc-ngoai-ve-viet-nam', 7, 4, 'Sáng 28.10, nhiều người yêu mèo đã đến TTTM SC Vivo City (Q.7, TP.HCM) tham dự cuộc thi mèo đẹp mang tên WCF Coral Jubilee Cat Show 2023. Đây là cuộc thi được tổ chức trong dịp kỷ niệm 35 năm ngày thành lập Liên đoàn mèo thế giới. Bên cạnh việc thúc đẩy phát triển nghề nhân giống chuyên nghiệp, cuộc thi còn có ý nghĩa lan tỏa thông điệp yêu thương động vật.\r\n\r\n', 2, 1, '/images/blog/blog-4.jpg', 'Giá mua và chi phí để nuôi một con mèo giống nước ngoài nhập về Việt Nam không hề thấp. Rồi nhiều người còn sẵn sàng chi tiền cho mèo đi spa, chăm sóc kỹ càng để tham dự cuộc thi mèo đẹp.', 'Hoa Hoa', '2023-11-02 11:27:04', '2023-11-03 11:27:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` int(20) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `user_id` int(20) DEFAULT 0,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `name`, `slug`, `user_id`, `create_at`, `update_at`) VALUES
(1, 'dog', 'blog-thu-cung', 7, '2023-11-10 18:02:45', '2023-11-10 18:02:46'),
(2, 'cat', 'blog-thu-cung', 7, '2023-11-10 18:02:44', '2023-11-10 18:02:45'),
(3, 'petnews', 'tin-tuc-thu-cung', 7, '2023-11-01 20:35:08', '2023-11-23 20:35:08'),
(4, 'catnews', 'tin-tuc-meo', 7, '2023-11-01 10:46:31', '2023-11-02 10:46:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(20) NOT NULL,
  `productid` int(20) DEFAULT NULL,
  `userid` int(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `productid`, `userid`, `quantity`, `price`) VALUES
(2, 6, 19, 1, 38000),
(3, 8, 19, 1, 75000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` int(20) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `parent_id` int(20) DEFAULT 0,
  `blog_id` int(20) DEFAULT 0,
  `user_id` int(20) DEFAULT 0,
  `status` tinyint(4) DEFAULT 0,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contacts`
--

CREATE TABLE `contacts` (
  `id` int(20) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user_id` int(20) DEFAULT 0,
  `message` text DEFAULT NULL,
  `pet_name` varchar(100) DEFAULT NULL,
  `pet_classify` varchar(100) DEFAULT NULL,
  `pet_weight` varchar(20) DEFAULT NULL,
  `pet_age` varchar(20) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `status` tinyint(4) DEFAULT 0,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `decentralization`
--

CREATE TABLE `decentralization` (
  `id` int(20) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `permission` text DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `decentralization`
--

INSERT INTO `decentralization` (`id`, `name`, `permission`, `create_at`, `update_at`) VALUES
(1, 'admin', 'Quản lý toàn bộ trang web', NULL, NULL),
(2, 'users', 'use service of website', NULL, NULL),
(3, 'staff', 'updating', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `default_pages`
--

CREATE TABLE `default_pages` (
  `id` int(20) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `user_id` int(20) DEFAULT 0,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `expert_team`
--

CREATE TABLE `expert_team` (
  `id` int(20) NOT NULL,
  `position_id` int(20) DEFAULT 1,
  `name` varchar(255) DEFAULT NULL,
  `gender` bigint(20) NOT NULL,
  `dob` datetime NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT '/images/avt-girl-defaults.jpg',
  `experience` int(3) DEFAULT 1,
  `about` text DEFAULT NULL,
  `pinterest` varchar(100) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `tiktok` varchar(100) DEFAULT NULL,
  `twitter` varchar(100) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `expert_team`
--

INSERT INTO `expert_team` (`id`, `position_id`, `name`, `gender`, `dob`, `phone`, `email`, `avatar`, `experience`, `about`, `pinterest`, `facebook`, `tiktok`, `twitter`, `create_at`, `update_at`) VALUES
(1, 1, 'Lê Ngọc Huy', 0, '2004-11-03 14:02:52', '0929837439', 'hyle@gmail.com', '/images/avt-boy-5.jpg', 2, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br />I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/hyle', 'https://facebook.com/hyle', 'https://tiktok.com/hyle', 'https://twitter.com/hyle', NULL, NULL),
(2, 3, 'Lê Thị Phong Như', 1, '2004-11-03 14:02:52', '0929837439', 'pnhu@gmail.com', '/images/avt-girl-7.jpg', 0, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br />I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/pnhu', 'https://facebook.com/pnhu', 'https://tiktok.com/pnhu', 'https://twitter.com/pnhu', NULL, NULL),
(3, 5, 'Phạm Trung Kiên', 0, '2004-11-03 14:02:52', '0929837439', 'ptkien@gmail.com', '/images/avt-boy-7.jpg', 5, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br/>I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/tkien', 'https://facebook.com/tkien', 'https://tiktok.com/tkien', 'https://twitter.com/tkien', NULL, NULL),
(4, 5, 'Nguyễn Xuân Định', 0, '2023-11-03 14:05:29', '0384566800', 'nxdinh94@gmail.com', '/images/avt-boy-4.jpg', 6, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br />I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/nxdinh', 'https://facebook.com/hyle', 'https://tiktok.com/nxdinh', 'https://twitter.com/nxdinh', NULL, NULL),
(5, 2, 'Trần Văn Đông', 0, '2023-11-03 14:05:29', '0987654321', 'tranvandong@gmail.com', '/images/avt-boy-6.jpg', 2, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br />I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/tvdong', 'https://facebook.com/tvdong', 'https://tiktok.com/tvdong', 'https://twitter.com/tvdong', NULL, NULL),
(6, 2, 'Hoàng Thanh', 1, '2023-11-03 14:05:29', '0987654321', 'tthanh@gmail.com', '/images/avt-girl-8.jpg', 10, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br />I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/hoangthanh', 'https://facebook.com/hoangthanh', 'https://tiktok.com/hoangthanh', 'https://twitter.com/hoangthanh', NULL, NULL),
(7, 4, 'Hoàng Quỳnh', 1, '2023-11-13 09:02:39', '0934356342', 'hquynh@gmail.com', '/images/avt-girl-6.jpg', 8, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br />I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/hoangquynh', 'https://facebook.com/hoangquynh', 'https://tiktok.com/hoangquynh', 'https://twitter.com/hoangquynh', NULL, NULL),
(9, 1, 'Trang Trang', 1, '2023-11-13 09:02:39', '0934356342', 'ttrang@gmail.com', '/images/avt-girl-5.jpg', 3, 'As a devoted dog caregiver, I bring a wealth of experience and a genuine passion for fostering the well-being of canine companions. With a strong commitment to providing love, attention, and a nurturing environment, I prioritize the physical and emotional needs of each dog under my care. Whether it\'s daily walks, engaging playtime, or maintaining a balanced diet, I am dedicated to creating a positive and enriching experience for furry friends. <br />I also understand the importance of patience, consistency, and positive reinforcement in training, ensuring that every dog feels secure and happy in their home environment. My commitment extends beyond the basics to building a lasting bond with each canine companion, promoting a healthy and fulfilling life for our beloved furry family members.', 'https://pinterest.com/ttrang', 'https://facebook.com/ttrang', 'https://tiktok.com/ttrang', 'https://twitter.com/ttrang', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `login_token`
--

CREATE TABLE `login_token` (
  `id` int(20) NOT NULL,
  `user_id` int(20) DEFAULT 0,
  `token` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `login_token`
--

INSERT INTO `login_token` (`id`, `user_id`, `token`, `created_at`, `update_at`) VALUES
(9, 19, '4bbf3f663ae60f19935d201570c7b43fb925f77a', '2023-12-10 17:30:38', NULL),
(10, 19, '4bbf3f663ae60f19935d201570c7b43fb925f77a', '2023-12-10 17:30:38', NULL),
(11, 7, '993859c5b25483ac427f10f790eb431b7acca08d', '2023-12-10 17:42:25', NULL),
(12, 7, '993859c5b25483ac427f10f790eb431b7acca08d', '2023-12-10 17:42:25', NULL),
(13, 19, '01befb5f7a2c335cc7a0e28410078f4964f79938', '2023-12-11 07:23:30', NULL),
(14, 19, '01befb5f7a2c335cc7a0e28410078f4964f79938', '2023-12-11 07:23:30', NULL),
(15, 19, 'fa3a206bd57459fda6dab3637046bcec7040b006', '2023-12-22 06:35:54', NULL),
(16, 19, 'fa3a206bd57459fda6dab3637046bcec7040b006', '2023-12-22 06:35:54', NULL),
(17, 19, '66afdb9f8fe1b6e18c5c2bbee9f242a07982bffe', '2023-12-22 13:27:08', NULL),
(18, 19, '66afdb9f8fe1b6e18c5c2bbee9f242a07982bffe', '2023-12-22 13:27:08', NULL),
(19, 19, '9cb095de164fa358632801dbe5d606c39dfd98d2', '2023-12-23 10:12:08', NULL),
(20, 19, '9cb095de164fa358632801dbe5d606c39dfd98d2', '2023-12-23 10:12:08', NULL),
(21, 19, 'c66552f0ab69a722099ab6327c5b1263a66343f8', '2023-12-23 10:12:08', NULL),
(22, 19, 'c66552f0ab69a722099ab6327c5b1263a66343f8', '2023-12-23 10:12:08', NULL),
(23, 19, 'd36f1747772fcffe2ec5b00fe47d946ed17c411a', '2023-12-23 10:12:08', NULL),
(24, 19, 'd36f1747772fcffe2ec5b00fe47d946ed17c411a', '2023-12-23 10:12:08', NULL),
(25, 19, 'b8b973bb5e21c72b7da2fe913185e82af974be09', '2023-12-23 10:12:08', NULL),
(26, 19, 'b8b973bb5e21c72b7da2fe913185e82af974be09', '2023-12-23 10:12:08', NULL),
(27, 19, 'd51ffec476db4c07eece91f86cd8f24aee2f2079', '2023-12-23 10:12:09', NULL),
(28, 19, 'd51ffec476db4c07eece91f86cd8f24aee2f2079', '2023-12-23 10:12:09', NULL),
(29, 19, 'd3ad8e40bc2822338870ee67a37281d422084621', '2023-12-25 07:29:47', NULL),
(30, 19, 'd3ad8e40bc2822338870ee67a37281d422084621', '2023-12-25 07:29:47', NULL),
(31, 19, '8599948cac3e9396f00ef024e7aa02c93374f5f4', '2023-12-25 07:29:47', NULL),
(32, 19, '8599948cac3e9396f00ef024e7aa02c93374f5f4', '2023-12-25 07:29:47', NULL),
(33, 19, 'f183cf103208e2792a46778f55fc0b9ddf4c2238', '2023-12-25 07:29:47', NULL),
(34, 19, 'f183cf103208e2792a46778f55fc0b9ddf4c2238', '2023-12-25 07:29:47', NULL),
(35, 19, 'd2ff465baf4cf73b025ae5c33d8b9b8b9cd26a5b', '2023-12-25 07:29:47', NULL),
(36, 19, 'd2ff465baf4cf73b025ae5c33d8b9b8b9cd26a5b', '2023-12-25 07:29:47', NULL),
(37, 19, 'ace673da4a29bf2ae678f7d8a85a1eae2d4b0a3a', '2023-12-25 07:29:48', NULL),
(38, 19, 'ace673da4a29bf2ae678f7d8a85a1eae2d4b0a3a', '2023-12-25 07:29:48', NULL),
(39, 19, 'f1d73c065706d96de056b55a1cb365b2fb930c28', '2023-12-27 02:13:15', NULL),
(40, 19, 'f1d73c065706d96de056b55a1cb365b2fb930c28', '2023-12-27 02:13:15', NULL),
(41, 19, 'c8575962c681a9709086b24dbd026f6e848a8a8a', '2023-12-27 04:02:27', NULL),
(42, 19, 'c8575962c681a9709086b24dbd026f6e848a8a8a', '2023-12-27 04:02:27', NULL),
(43, 19, '5e1441c190ba54149bdaf4a89d52efaddd4007bc', '2023-12-27 04:03:28', NULL),
(44, 19, '5e1441c190ba54149bdaf4a89d52efaddd4007bc', '2023-12-27 04:03:28', NULL),
(45, 19, 'e2aada0793a203531f746bdd01b5d32a7633fa24', '2023-12-27 04:07:59', NULL),
(46, 19, 'e2aada0793a203531f746bdd01b5d32a7633fa24', '2023-12-27 04:07:59', NULL),
(47, 19, '497369ace45dfe8fa493f155577115a79f578308', '2023-12-27 04:15:37', NULL),
(48, 19, '497369ace45dfe8fa493f155577115a79f578308', '2023-12-27 04:15:37', NULL),
(49, 19, 'c0b58a20e21a8df5b510108a9b56a14ab9685853', '2023-12-27 04:18:32', NULL),
(50, 19, 'c0b58a20e21a8df5b510108a9b56a14ab9685853', '2023-12-27 04:18:32', NULL),
(51, 19, '36aed88e6c0bf71f0fcd3b078e77fa5d0e36c106', '2023-12-27 04:23:02', NULL),
(52, 19, '36aed88e6c0bf71f0fcd3b078e77fa5d0e36c106', '2023-12-27 04:23:02', NULL),
(53, 19, '348d62732e8020f95c94bddff8048701416da8df', '2023-12-27 04:56:40', NULL),
(54, 19, '348d62732e8020f95c94bddff8048701416da8df', '2023-12-27 04:56:40', NULL),
(55, 19, '45aaeeb7610ec60394155e3574a399c3d826dfaa', '2023-12-27 07:44:18', NULL),
(56, 19, '45aaeeb7610ec60394155e3574a399c3d826dfaa', '2023-12-27 07:44:18', NULL),
(57, 19, 'ad61d0b9efcdaa33ee2df5763d7c93eeafa465d7', '2023-12-28 09:36:20', NULL),
(58, 19, 'ad61d0b9efcdaa33ee2df5763d7c93eeafa465d7', '2023-12-28 09:36:20', NULL),
(59, 19, '6a40b4caefac7b42f16fe265fe0eb1d4749e7c31', '2023-12-29 02:36:18', NULL),
(60, 19, '6a40b4caefac7b42f16fe265fe0eb1d4749e7c31', '2023-12-29 02:36:18', NULL),
(61, 19, 'b7232f5074f51b048b4c8a160f43fe1a189022f7', '2023-12-29 17:01:09', NULL),
(62, 19, 'b7232f5074f51b048b4c8a160f43fe1a189022f7', '2023-12-29 17:01:09', NULL),
(63, 19, '243acfd4a47b4ce17d92745bb1b4515c0876cc54', '2024-01-01 05:11:04', NULL),
(64, 19, '243acfd4a47b4ce17d92745bb1b4515c0876cc54', '2024-01-01 05:11:04', NULL),
(65, 19, '5d0b2ffeaa71bb622788dc68cb271494de20a5c3', '2024-01-02 03:37:39', NULL),
(66, 19, '5d0b2ffeaa71bb622788dc68cb271494de20a5c3', '2024-01-02 03:37:39', NULL),
(67, 19, 'd1d342d77fbc332bd181833ac20f56fc45c2fd3f', '2024-01-02 03:48:34', NULL),
(68, 19, 'd1d342d77fbc332bd181833ac20f56fc45c2fd3f', '2024-01-02 03:48:34', NULL),
(69, 19, '0d4945e733d83169eae5e278b30add142f30fca1', '2024-01-02 04:01:18', NULL),
(70, 19, '0d4945e733d83169eae5e278b30add142f30fca1', '2024-01-02 04:01:18', NULL),
(71, 19, '22285d105f1cedbd367fcf4712a85f09d5ca0499', '2024-01-03 12:40:44', NULL),
(72, 19, '22285d105f1cedbd367fcf4712a85f09d5ca0499', '2024-01-03 12:40:44', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `options`
--

CREATE TABLE `options` (
  `id` int(20) NOT NULL,
  `key` varchar(100) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `value` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `options`
--

INSERT INTO `options` (`id`, `key`, `name`, `value`) VALUES
(1, 'Thức ', 'Xương- Bánh thưởng', NULL),
(3, 'Thức ăn', 'Thức ăn hạt khô', NULL),
(4, 'Thức ăn', 'Pate- thức ăn ướt', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pets`
--

CREATE TABLE `pets` (
  `id` int(20) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `thumbnail` varchar(200) DEFAULT NULL,
  `descr` text DEFAULT NULL,
  `pet_category_id` int(20) DEFAULT 0,
  `other_name` varchar(100) DEFAULT NULL,
  `origin` varchar(100) DEFAULT NULL,
  `classify` varchar(100) DEFAULT NULL,
  `fur_style` varchar(100) DEFAULT NULL,
  `fur_color` varchar(10) DEFAULT NULL,
  `weight` varchar(20) DEFAULT NULL,
  `longevity` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `pets`
--

INSERT INTO `pets` (`id`, `name`, `thumbnail`, `descr`, `pet_category_id`, `other_name`, `origin`, `classify`, `fur_style`, `fur_color`, `weight`, `longevity`, `created_at`, `update_at`) VALUES
(1, 'Baby cat', '/images/slider/baby-cat.jpg', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', 1, 'Chó c', 'Mexico ', 'giống nhỏ', 'lông ngắn', 'đa dạng', 'nặng tầm 1,5 – 3kg', 'cao khoảng 16 – 20cm', '2023-11-10 14:59:45', NULL),
(2, 'Chó lạp xưởng', '/images/slider/chó lạp xưởng.png', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', 1, 'chó xúc xích', 'Đức', 'giống nhỏ, dài', 'lông ngắn', 'vàng, nâu,', ' 7 – 15kg', ' 20 – 27cm', '2023-11-10 14:59:46', NULL),
(3, 'Golden', '/images/slider/golden.jpg', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', 1, 'chó nghiệp vụ ', 'Việt Nam', 'vừa', 'lông xoáy trên sống lưng', 'vàng, nâu,', '12 – 18kg', '48-52cm', '2023-11-10 14:59:46', NULL),
(4, 'Mèo ba tư', '/images/slider/meo-ba-tu.jpg', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', 0, 'Không có', 'Tây Âu', 'nhỏ, vừa', 'lông xoăn, mềm', '(đen/trắng', '2-9 kg', '25 – 40cm', '2023-11-10 14:59:47', NULL),
(5, 'Mèo trắng', '/images/slider/meo-trang.jpg', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', 0, 'Không có', 'Trung Quốc', 'nhỏ, vừa', 'lông ngắn', 'đen/nâu nh', 'không tới 10 kg', '30 – 35cm', '2023-11-10 14:59:47', NULL),
(6, 'Poodle', '/images/slider/Poodle.jpg', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', 0, 'Ngáo', 'Hoa Kỳ', 'vừa, lớn', 'lông dài, dày', 'xám trắng/', '35-50kg', '55 – 70cm', '2023-11-10 14:59:48', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `productid` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `quantity` int(11) UNSIGNED DEFAULT NULL,
  `ingredient` text DEFAULT NULL,
  `thumpnail2` varchar(100) DEFAULT NULL,
  `origin` varchar(100) DEFAULT NULL,
  `promotionid` int(20) DEFAULT NULL,
  `dimensions` varchar(10) DEFAULT NULL,
  `color` varchar(10) DEFAULT NULL,
  `evaluate_star` int(5) DEFAULT NULL,
  `evaluate_quantity` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `product_status` int(4) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`productid`, `product_name`, `slug`, `price`, `quantity`, `ingredient`, `thumpnail2`, `origin`, `promotionid`, `dimensions`, `color`, `evaluate_star`, `evaluate_quantity`, `description`, `product_status`, `created_at`, `updated_at`) VALUES
(1, 'Waggin Train Chicken Jerky Tenders', 'waggin-train-chicken-jerky-tenders', 395000, 111, 'Làm từ thịt gà tươi 100% nguyên chất, đảm bảo chất lượng cao. Gà sấy theo công nghệ tiên tiến nên giữ được độ tươi ngon trong thịt ức gà và giữ lại độ ẩm của ức gà giúp bổ sung nước cho các bé. Hạn chế bé buồn chán, giảm stress khi ở một mình. Hương vị thơm ngon, Kích thích sự thèm ăn của bé. Cung cấp thêm năng lượng, vitamin cho bé. Giàu đạm và khoáng chất, dùng để bổ sung thêm dinh dưỡng cho bé hoặc dùng làm bánh thưởng, huấn luyện. Túi có khóa zip, giữ đồ ăn luôn tươi mới, dễ dàng bảo quản sau khi mở', '/images/product/waggin-train-chicken-jerky-tenders.webp', 'Hà Lan', NULL, '30x60', 'Be', 4, 22, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-04 13:43:03', '2023-12-25 11:09:12'),
(2, 'Milk Bone brushing Chews Daily Dental Dog Treats', 'milk-bone-brushing-chews-daily-dental-dog-treats', 265000, 111, 'PETME LYTE-PREBIOTIC - MEN TIÊU HOÁ CHO CHÓ MÈO 15G', '/images/product/milk-bone-brushing-chews-daily-dental-dog-treats.webp', 'Pháp', NULL, '34x80', 'Red', 5, 22, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-04 13:43:03', '2023-12-04 13:43:03'),
(3, 'Cadet Duck Breast', 'cadet-duck-breast', 595000, 111, 'Món vịt cho chó được làm bằng ức vịt thật, chất lượng cao. Thức ăn cho chó khỏe mạnh không có màu nhân tạo, chất độn hoặc sản phẩm phụ. Thức ăn cho chó giàu protein tốt cho sức khỏe và ngon miệng. Vịt con chó thật được nướng trong lò để mang lại hương vị tự nhiên. Món vịt tự nhiên dành cho chó tạo nên phần thưởng tuyệt vời', '/images/product/cadet-duck-breast.webp', 'Pháp', NULL, '24x70', 'Purple', 4, 22, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-04 13:43:03', '2023-12-04 13:43:03'),
(5, 'FANCY FEAST - Meat Chicken Gravy 85g', 'cat-fancy-feast-meat-chicken-gravy', 55000, 111, 'Được chế tác với gà tây và giblets chất lượng cao, hoàn chỉnh 100% và cân bằng cho mèo trưởng thành, ngon, chất lượng cao trong từng chi tiết', '/images/product/cat-fancy-feast-meat-chicken-gravy.webp', 'Anh', NULL, '24x70', 'Be', 3, 22, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-04 13:43:03', '2023-12-25 11:13:59'),
(6, 'Dog Royal Canin', 'dog-royal-canin', 38000, 111, 'Thịt và dẫn xuất từ thịt, ngũ cốc, dẫn xuất từ thực vật, khoáng chất, các loại đường, phụ gia dinh dưỡng, vitamin D3, E1 (Sắt), E2 (I ốt), E4(Đồng), E5 (Manga), E6 (Kẽm)', '/images/product/royal-canin.webp', 'Pháp', NULL, '24x70', 'Red', 4, 22, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-04 13:43:03', '2023-12-04 13:43:03'),
(7, 'Cat Fancy Feast Pate - Kitten Alaska Salmon 85g', 'cat-fancy-feast-pate-kitten-85g', 55000, 111, 'Được chế tác bằng gà tây và phụ kiện thật, chất lượng cao, hoàn thiện và cân bằng 100% cho mèo trưởng thành, thơm ngon, chất lượng cao đến từng chi tiết', '/images/product/cat-fancy-feast-pate.webp', 'Mỹ', NULL, '55x55', 'Be', 4, 22, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-04 13:43:03', '2023-12-04 13:43:03'),
(8, 'Royal Pets Catnip 5gr', 'royal-pet-catnip', 75000, 111, 'Kích thước 5 gram', '/images/product/royal-pet-catnip.webp', 'Campuchia', NULL, '24x70', 'Red', 4, 22, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-04 13:43:03', '2023-12-04 13:43:03'),
(9, 'Sữa hộp Dr.Kyan PREDOGEN', 'Sữa-hộp-Dr.Kyan-PREDOGEN', 180000, 111, 'Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.', '/images/product/Sữa-hộp-Dr.Kyan-PREDOGEN.png', 'Nhật Bản', NULL, '15x20', 'Be', 5, 3, '– Sản phẩm được tư vấn và sản xuất theo công nghệ của một trong những công ty công thức phát triển hàng đầu tại Mỹ cho thú cưng Wonderlife Pharma.\r\n– Thành phần đặc biệt chứa Canxi nano và Vitamin D cho việc hấp thu tối đa chất dinh dưỡng nhờ vào kích thước siêu nhỏ của hạt Canxi nano. Hạn chế các nguyên nhân gây ra bệnh sỏi thận như những sản phẩm khác. Hỗ trợ xương và răng chắc khỏe, phát triển toàn diện và bảo vệ xương, khớp.\r\n– Bổ sung khoáng chất và hơn 9 loại Vitamin khác nhau (Vitamin A,B1, B2, B6, B12, C, D3, K1…), giúp tăng cường hệ miễn dịch, tránh bị các bệnh thông thường mà thú cưng hay gặp phải.\r\n', 1, '2023-12-29 14:25:44', '2023-12-29 14:25:44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `promotion`
--

CREATE TABLE `promotion` (
  `promotionid` int(20) NOT NULL,
  `promotion_name` varchar(100) DEFAULT NULL,
  `promotion_type` varchar(100) DEFAULT NULL,
  `promotion_value` varchar(50) DEFAULT NULL,
  `promotion_status` int(4) DEFAULT NULL,
  `time_start` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `dersc` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `cost` float DEFAULT NULL,
  `teamid` int(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `services`
--

INSERT INTO `services` (`id`, `name`, `slug`, `icon`, `dersc`, `content`, `cost`, `teamid`, `created_at`, `updated_at`) VALUES
(1, 'Khách sạn chó mèo ', 'khach-san-cho-meo', '/images/blog/blog-1.jpg', 'Khách sạn thú cưng còn gọi là Pet Hotel.', '1.1. Phòng chung cư cho thú cưng\r\nĐây là loại phòng khách sạn chó mèo giá rẻ nhất tại Kimi Pet, là mẫu phòng cơ bản với đặc điểm là phòng lồng sắt sơn tĩnh điện, với chỗ ở tiện nghi, đầy đủ dụng cụ ăn uống', 100000, 5, '2023-11-16 14:57:33', '2023-11-18 11:02:33'),
(4, 'Huấn luyện chó chuyên nghiệp', 'dich-vu-huan-luyen-cho', '/images/blog/blog-4.jpg', 'Huấn luyện chó không chỉ là một quá trình đào tạo kỹ năng.', 'Các khóa huấn luyện chó có giáo trình huấn luyện phù hợp với hầu hết các nhu cầu cơ bản của khách hàng. Dưới đây là giáo trình huấn luyện chó tại Fago Pet bạn có thể tham khảo:\r\n\r\nBài 1: Huấn luyện chó lại đứng gần chủ.\r\nBài 2: Dạy chó đứng yên tại chỗ.\r\nBài 3: Dạy chó ngồi, ngồi yên tại chỗ.\r\nBài 4: Huấn luyện chó nằm, nằm yên tại chỗ.\r\nBài 5: Dạy chó luôn đi bên cạnh chủ khi đi dạo hay dã ngoại.\r\nBài 6: Huấn luyện chó bò, bò lại gần chủ.\r\nBài 7: Huấn luyện chó ngồi chào.\r\nBài 8: Huấn luyện chó bắt tay.\r\nBài 9: Huấn luyện chó tự chơi 1 mình.\r\nBài 10: Dạy chó sủa khi có lệnh.\r\nBài 11: Huấn luyện chó tìm đồ vật và gắp mang lại.\r\nBài 12: Huấn luyện chó bảo vệ chủ khi có lệnh.', 100000, 3, '2023-11-18 11:02:35', '2023-11-18 11:02:34'),
(5, 'Cứu hộ cho thú cưng', 'cuu-ho-thu-cung', '/images/blog/blog-5.jpg', 'Dịch vụ cứu hộ thú cưng chuyên nghiệp.', 'Đội ngũ cứu hộ thú cưng tại các bệnh viện hay các cơ sở cung cấp dịch vụ cứu hộ thú cưng cùng làm việc chung một mục đích đó là mong mang lại cuộc sống tươi đẹp cho các chú chó, chú mèo, thú cưng nói chung. ', 100000, 2, '2023-11-01 21:21:48', '2023-11-02 21:21:48'),
(6, 'Thời trang thú cưng', 'thoi-trang-thu-cung', '/images/blog/blog-6.jpg', 'Cung cấp thời trang thú cưng chuyên nghiệp.', 'Cũng giống như con người hay bao vật nuôi khác, thú cưng luôn cần những dụng cụ thiết yếu để đảm bảo sự thuận tiện trong sinh hoạt và chăm sóc, trong đó thời trang cho thú cưng là một trong những phụ kiện không thể thiếu.', 100000, 2, '2023-11-01 21:21:48', '2023-11-02 21:21:48'),
(7, 'Cắt tỉa lông chó mèo', 'cat-tia-long-cho-cho-meo', '/images/blog/blog-7.jpg', 'Dịch vụ cắt tỉa lông chó mèo chuyên nghiệp.', 'Để đảm bảo sức khỏe cho các boss cũng như tránh những trường hợp thú cưng nhà bạn bị nhiễm các bệnh về da như: ký sinh trùng, bọ chét, ve rận…. thì việc cắt tỉa lông cho chó đóng vai trò vô cùng quan trọng', 100000, 2, '2023-11-01 21:21:48', '2023-11-02 21:21:48'),
(8, 'Trông nom thú cưng', 'dich-vu-trong-giu-cho-meo', '/images/blog/blog-2.jpg', 'Dịch vụ trông giữ chó mèo chuyên nghiệp.', 'Dịch vụ trông giữ chó mèo ngày nay là một trong những giải pháp cứu cánh cho các “sen” khi không thể dành thời gian để chăm sóc các boss, đặc biệt là những trường hợp bất khả kháng như có việc đột xuất, về quê, tết…', 100000, 1, '2023-11-01 21:21:48', '2023-11-02 21:21:48'),
(9, 'Tư vấn dinh dưỡng thú cưng', 'dich-vu-dinh-duong-thu-cung', '/images/blog/blog-5.jpg', 'Dịch vụ dinh dưỡng thú cưng chuẩn 5 sao', 'Dinh dưỡng cho bé cưng rất quan trọng.Để tránh tình trạng biến ăn, kén ăn , lười ăn, chúng tôi cung cấp các thực phẩm tốt phổ biến nhất cho boss của bạn.', 100000, 5, '2023-11-01 21:21:48', '2023-11-02 21:21:48'),
(10, 'Nhuộm lông cho thú cưng', 'dich-vu-nhuom-long-cho-thu-cung', '/images/blog/blog-6.jpg', 'Dịch vụ nhuộm lông thú cưng chuyên nghiệp.', 'Nhuộm lông cần được thực hiện bởi những người có kinh nghiệm và sử dụng sản phẩm nhuộm chất lượng nếu không sẽ gây ảnh hưởng không tốt đến sức khỏe thú cưng', 100000, 5, '2023-11-01 21:21:48', '2023-11-02 21:21:48'),
(12, 'Khu vui chơi cho thú cưng', 'khu-vui-choi-thu-cung', '/images/blog/blog-3.jpg', 'Khu vui chơi chuyên nghiệp dành cho thú cưng.', 'Nơi đây có đầy đủ các món đồ chơi yêu thích của bé cưng. Giúp cho các bé giải tỏa , tự do chơi đùa.', 100000, 4, '2023-11-01 21:21:48', '2023-11-02 21:21:48');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `staff_position`
--

CREATE TABLE `staff_position` (
  `position_id` int(20) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `staff_position`
--

INSERT INTO `staff_position` (`position_id`, `name`) VALUES
(1, 'Dog walker'),
(2, 'Pet siter'),
(3, 'Pet bather'),
(4, 'Pet technicians'),
(5, 'Animal trainer');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `timeworking`
--

CREATE TABLE `timeworking` (
  `id` int(20) NOT NULL,
  `timeworking` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `timeworking`
--

INSERT INTO `timeworking` (`id`, `timeworking`) VALUES
(1, '7h-11h'),
(2, '13h-17h'),
(3, 'all day');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `thumbnail` varchar(100) DEFAULT '/images/avt-boy.jpg',
  `dob` date DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `about_content` text DEFAULT NULL,
  `contact_facebook` varchar(100) DEFAULT NULL,
  `contact_twitter` varchar(100) DEFAULT NULL,
  `contact_linkedin` varchar(100) DEFAULT NULL,
  `contact_pinterest` varchar(100) DEFAULT NULL,
  `forget_token` varchar(100) DEFAULT NULL,
  `active_token` varchar(100) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  `decentralization_id` int(20) DEFAULT 2,
  `delivery_address` text DEFAULT NULL,
  `last_activity` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `thumbnail`, `dob`, `address`, `phone`, `about_content`, `contact_facebook`, `contact_twitter`, `contact_linkedin`, `contact_pinterest`, `forget_token`, `active_token`, `status`, `decentralization_id`, `delivery_address`, `last_activity`, `created_at`, `updated_at`) VALUES
(7, 'Phạm Trung Kiên', 'acccuakien@gmail.com', '$2y$10$sB3Rpg3YRgV4TFuR5Nwriu71hd5CmKrgJs3.PF1.5FrgtqPa3S4xO', '/images/avt-boy-2.jpg', '2004-05-04', 'Quang Nam', '0876767654', 'Trapboy', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'fsf', '8b8798274144c38069e5d17a9809827320b5d277', 2, 3, 'Đường Trần Hưng Đạo - Quận 1 - Thành phố Hồ Chí Minh', '2023-11-11 18:27:53', '2023-11-11 18:27:54', '2023-12-29 22:03:03'),
(19, 'Nguyễn Xuân Định', 'nguyenxuandinh336live@gmail.com', '$2y$10$IpzV6757wus3mhnkr2nH2euanKeueMCgcpCTdOXrKfb4QumPFy1f2', '/images/avt-boy-3.jpg', '2004-04-09', 'Phu yen', '0384566800', 'Định học lập trình', 'https://www.facebook/nxdinh94', 'https://www.twitter.com/nxdinh94', 'https://www.linkedin.com/in/nxdinh94', 'https://www.pinterest.com/nxdinh94', 'token_3', '8b8798274144c38069e5d17a9809827320b5d277', 1, 1, 'Kí Túc Xá Đại Học Công Nghệ Thông Tin Việt Hàn, Đường Trần Đại Nghĩa, Phường Hòa Quý, Quận Ngũ Hành Sơn, Đà Nẵng', '2024-01-01 11:10:45', '2023-11-12 06:42:09', '2024-01-02 04:08:35'),
(22, 'myAdmin2', 'acccuakien2@gmail.com', '$2y$10$sB3Rpg3YRgV4TFuR5Nwriu71hd5CmKrgJs3.PF1.5FrgtqPa3S4xO', '/images/avt-boy-2.jpg', '2004-05-04', 'Quang Nam', '0876767654', 'Trapboy', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'fsf', '8b8798274144c38069e5d17a9809827320b5d277', 1, 2, 'Đường Trần Hưng Đạo - Quận 1 - Thành phố Hồ Chí Minh', '2023-11-11 18:27:53', '2023-11-11 18:27:54', '2023-12-04 07:21:15'),
(23, 'myAdmin', 'acccuakien2@gmail.com', '$2y$10$sB3Rpg3YRgV4TFuR5Nwriu71hd5CmKrgJs3.PF1.5FrgtqPa3S4xO', '/images/avt-boy-2.jpg', '2004-05-04', 'Quang Nam', '0876767654', 'Trapboy', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'https://meet.google.com/zgq-cjaq-jqn', 'fsf', '8b8798274144c38069e5d17a9809827320b5d277', 1, 2, 'Đường Trần Hưng Đạo - Quận 1 - Thành phố Hồ Chí Minh', '2023-11-11 18:27:53', '2023-11-11 18:27:54', '2023-12-29 22:03:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_service`
--

CREATE TABLE `user_service` (
  `serviceid` int(11) NOT NULL,
  `userid` int(20) NOT NULL,
  `status` int(4) DEFAULT 0,
  `register_day` date DEFAULT NULL,
  `payment_status` tinyint(1) DEFAULT 0,
  `periodTime` int(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `user_service`
--

INSERT INTO `user_service` (`serviceid`, `userid`, `status`, `register_day`, `payment_status`, `periodTime`, `created_at`, `updated_at`) VALUES
(6, 19, 0, '2024-01-05', 0, 1, '2024-01-03 13:43:25', '2024-01-03 19:43:25'),
(7, 19, 0, '2024-01-06', 0, 3, '2024-01-03 13:43:50', '2024-01-03 19:43:50');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`billid`),
  ADD KEY `FK_BILL_USER` (`userid`);

--
-- Chỉ mục cho bảng `billdetail`
--
ALTER TABLE `billdetail`
  ADD PRIMARY KEY (`billdetail_id`),
  ADD KEY `FK_BILLDETAIL_PRODUCT` (`productid`),
  ADD KEY `FK_BILLDETAIL_BILL` (`billid`);

--
-- Chỉ mục cho bảng `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id_blog` (`user_id`),
  ADD KEY `fk_blog_category_id_blog` (`blog_category_id`);

--
-- Chỉ mục cho bảng `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id_blog_category` (`user_id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_user_card` (`userid`),
  ADD KEY `FK_PRODUCT_CARD` (`productid`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id_comments` (`user_id`),
  ADD KEY `fk_blog_id_comments` (`blog_id`);

--
-- Chỉ mục cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_type_id` (`user_id`) USING BTREE;

--
-- Chỉ mục cho bảng `decentralization`
--
ALTER TABLE `decentralization`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `default_pages`
--
ALTER TABLE `default_pages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id_default_page` (`user_id`);

--
-- Chỉ mục cho bảng `expert_team`
--
ALTER TABLE `expert_team`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_EXPERTTEAM_POSITION` (`position_id`);

--
-- Chỉ mục cho bảng `login_token`
--
ALTER TABLE `login_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Chỉ mục cho bảng `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productid`),
  ADD KEY `FK_PRODUCT_PROMOTION` (`promotionid`);

--
-- Chỉ mục cho bảng `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`promotionid`);

--
-- Chỉ mục cho bảng `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_TEAM_SERVICE` (`teamid`);

--
-- Chỉ mục cho bảng `staff_position`
--
ALTER TABLE `staff_position`
  ADD PRIMARY KEY (`position_id`);

--
-- Chỉ mục cho bảng `timeworking`
--
ALTER TABLE `timeworking`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_decentralization_id` (`decentralization_id`);

--
-- Chỉ mục cho bảng `user_service`
--
ALTER TABLE `user_service`
  ADD PRIMARY KEY (`serviceid`,`userid`),
  ADD KEY `FK_USER` (`userid`),
  ADD KEY `register_time` (`periodTime`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bill`
--
ALTER TABLE `bill`
  MODIFY `billid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT cho bảng `billdetail`
--
ALTER TABLE `billdetail`
  MODIFY `billdetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `decentralization`
--
ALTER TABLE `decentralization`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `default_pages`
--
ALTER TABLE `default_pages`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `expert_team`
--
ALTER TABLE `expert_team`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `login_token`
--
ALTER TABLE `login_token`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT cho bảng `options`
--
ALTER TABLE `options`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `productid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `promotion`
--
ALTER TABLE `promotion`
  MODIFY `promotionid` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `staff_position`
--
ALTER TABLE `staff_position`
  MODIFY `position_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `timeworking`
--
ALTER TABLE `timeworking`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `FK_BILL_USER` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `billdetail`
--
ALTER TABLE `billdetail`
  ADD CONSTRAINT `FK_BILLDETAIL_BILL` FOREIGN KEY (`billid`) REFERENCES `bill` (`billid`),
  ADD CONSTRAINT `FK_BILLDETAIL_PRODUCT` FOREIGN KEY (`productid`) REFERENCES `product` (`productid`);

--
-- Các ràng buộc cho bảng `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `fk_blog_category_id_blog` FOREIGN KEY (`blog_category_id`) REFERENCES `blog_categories` (`id`),
  ADD CONSTRAINT `fk_user_id_blog` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD CONSTRAINT `fk_user_id_blog_category` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_PRODUCT_CARD` FOREIGN KEY (`productid`) REFERENCES `product` (`productid`),
  ADD CONSTRAINT `FK_user_card` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_blog_id_comments` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`id`),
  ADD CONSTRAINT `fk_user_id_comments` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `FK_user_contact` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `default_pages`
--
ALTER TABLE `default_pages`
  ADD CONSTRAINT `fk_user_id_default_page` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `expert_team`
--
ALTER TABLE `expert_team`
  ADD CONSTRAINT `FK_EXPERTTEAM_POSITION` FOREIGN KEY (`position_id`) REFERENCES `staff_position` (`position_id`);

--
-- Các ràng buộc cho bảng `login_token`
--
ALTER TABLE `login_token`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_PRODUCT_PROMOTION` FOREIGN KEY (`promotionid`) REFERENCES `promotion` (`promotionid`);

--
-- Các ràng buộc cho bảng `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `FK_TEAM_SERVICE` FOREIGN KEY (`teamid`) REFERENCES `staff_position` (`position_id`);

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_decentralization_id` FOREIGN KEY (`decentralization_id`) REFERENCES `decentralization` (`id`);

--
-- Các ràng buộc cho bảng `user_service`
--
ALTER TABLE `user_service`
  ADD CONSTRAINT `FK_USER` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FK_service` FOREIGN KEY (`serviceid`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `user_service_ibfk_1` FOREIGN KEY (`periodTime`) REFERENCES `timeworking` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
