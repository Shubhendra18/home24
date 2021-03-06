USE [master]
GO
/****** Object:  Database [mandiparishadmessageboard]    Script Date: 11/27/2019 12:35:22 AM ******/
CREATE DATABASE [mandiparishadmessageboard]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'mandiparishadmessageboard', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\mandiparishadmessageboard.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'mandiparishadmessageboard_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\mandiparishadmessageboard_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [mandiparishadmessageboard] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [mandiparishadmessageboard].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [mandiparishadmessageboard] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET ARITHABORT OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [mandiparishadmessageboard] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [mandiparishadmessageboard] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET  DISABLE_BROKER 
GO
ALTER DATABASE [mandiparishadmessageboard] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [mandiparishadmessageboard] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [mandiparishadmessageboard] SET  MULTI_USER 
GO
ALTER DATABASE [mandiparishadmessageboard] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [mandiparishadmessageboard] SET DB_CHAINING OFF 
GO
ALTER DATABASE [mandiparishadmessageboard] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [mandiparishadmessageboard] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [mandiparishadmessageboard] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [mandiparishadmessageboard] SET QUERY_STORE = OFF
GO
USE [mandiparishadmessageboard]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 11/27/2019 12:35:22 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[M_GroupMaster]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[M_GroupMaster](
	[groupId] [int] IDENTITY(1,1) NOT NULL,
	[groupName] [nvarchar](max) NULL,
	[isDeleted] [bit] NULL,
	[transDate] [datetime] NOT NULL,
	[userId] [int] NOT NULL,
	[GroupOrder] [int] NOT NULL,
 CONSTRAINT [PK_dbo.M_GroupMaster] PRIMARY KEY CLUSTERED 
(
	[groupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[M_UserMaster]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[M_UserMaster](
	[userId] [bigint] NOT NULL,
	[userName] [nvarchar](50) NULL,
	[groupID] [int] NULL,
	[LastLogin] [datetime] NULL,
	[password] [nvarchar](50) NULL,
	[Activeflag] [varchar](50) NULL,
	[LastLoginIP] [varchar](50) NULL,
 CONSTRAINT [PK_M_UserMaster] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblMailBox]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblMailBox](
	[MailId] [bigint] IDENTITY(1,1) NOT NULL,
	[Priority] [int] NULL,
	[SMS] [bit] NULL,
	[Subject] [nvarchar](max) NULL,
	[Message] [nvarchar](max) NULL,
	[PostDate] [datetime] NULL,
	[IsViewed] [bit] NULL,
	[IsArchived] [bit] NULL,
	[IsImportant] [bit] NULL,
	[IsDraft] [bit] NULL,
	[IsTrash] [bit] NULL,
	[Sid] [bigint] NULL,
	[Rid] [bigint] NULL,
 CONSTRAINT [PK_tblMailBox] PRIMARY KEY CLUSTERED 
(
	[MailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblMailInfo]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblMailInfo](
	[RowId] [bigint] IDENTITY(1,1) NOT NULL,
	[MailId] [bigint] NULL,
	[Sid] [bigint] NULL,
	[Rid] [bigint] NULL,
 CONSTRAINT [PK_tblMailInfo] PRIMARY KEY CLUSTERED 
(
	[RowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [Model], [ProductVersion]) VALUES (N'201911201629117_InitialCreate', N'MandiParishadWebApi.Models.AdminContext', 0x1F8B0800000000000400CD58DB8EDB36107D2FD07F10F4D4021B732F2FED424EE0D8BB81D178BD8836C963404B639B282F2A492DEC6FCB433FA9BFD0A1EE966CCBDE2CD0C22F1235737866387334F23FDFFF0EDE6D04F79E411BA6E4D0BF1A5CFA1EC848C54CAE867E6A976F7EF3DFBDFDF9A7E02E161BEF4B6977E3ECD0539AA1BFB636B925C4446B10D40C048BB4326A6907911284C68A5C5F5EFE4EAEAE0820848F589E177C4AA56502B21BBC1D2B19416253CA672A066E8A757C1266A8DE031560121AC1D09F5119B347AA9959D3F82B2C46091BE45EBE37E28C22A310F8D2F7A894CA528B7C6F3F1B08AD56721526B840F9D33601B45B526EA088E3B6363F35A4CB6B1712A91D4BA8283556893301AF6E8A1C91B6FB8B32ED5739C42CDE61B6EDD6459D651293F8ED83566932A3C682F6BDF68EB763AE9DF5B16C0F76302EBC3D961755C1605DB9DF85374EB94D350C25A456537EE13DA60BCEA23F60FBA4FE04399429E74DEA481E9FED2CE0D2A3560968BBFD04CB22A095A3328D7D8FEC3A93B677E5DB76CCE39D4A7B73ED7B0F48832E385435D2C84D6895860F2041530BF123B5183E1EF134862CCB1D0AFB367497E5965899D86C3E2670F311E4CAAE5DD637BE77CF3610972B058DCF92616FA293D529F4EDC4CC043820C772A7F74A71A0B2CF0F0F469A090657FAB9EB27E61877F2721C2935A0FB737B1C232BB2B98E5D9D9E8E1390BAE6BB9D807A6329C3132CF618C58249B7081BBBA71B503E8A863045E67719E7A021D8FDDD5533C9A569D07ABE8F77C5B09642926B61A999E4806806339A2458500D112D56BC3057D0F19BF07C4911390689CC1E65A9D8563B618FD015B49EE2D6C8F49E6963B1A4E882BA531BC7A263B6731E07725D6EB52FE56DBDA84FA0F472D785E7890AD706ADF37A8FA10A6CFE2C6AA808F690CA10C28872AA0F49D258F154C8A302D78B932B4D07295F3E1DABA1254DACC6F2E9580D7D696235964FC72A15A60954AE9D8ED2D498265273BD8B16905601B4CB8E74EAAEF5726A17F33121689B54BB5782D06AFCA068C2FE91AAD395B989EF619A9E59EC3A32DC620D8B813318847FF13167186F6D804DC496606CFE12F7719AB96E4D63FF9FC9881813F373C6A3FF701C612EC9BD03C7996FD4CE04229FA98ED654FF22E8E6D726DC8BA68C05B3E76274268E18AFED8F4F1C59FA7E78DEE847396FDAE8BE045F759CC89B1773B8501841CEF975268EAEA004A4F925174CC0B0550DE1BEEB2444AE536BD0D2662A97AA4C3DC6DA64549AB44E6606966261D091B66C49238B8F2330261B9EBF509EA2C99D58403C95F3D426A91D190362C17726F2801CDF3F1BAB763907F3C4DD99D70801693257DB73F93E653CAE78DFEFA9A90310AE7A0A314056F8F18070AB6D85F4A0E4894045FA2690807452F20422E10866E632A4CFF0126E38287F84158DB6E57BE13048FF41ECA63D9830BAD2549802A3F677FF4E10F7F7C4DB7F01D2C91A83D0100000, N'6.3.0')
SET IDENTITY_INSERT [dbo].[M_GroupMaster] ON 

INSERT [dbo].[M_GroupMaster] ([groupId], [groupName], [isDeleted], [transDate], [userId], [GroupOrder]) VALUES (3, N'Mandi', 0, CAST(N'2019-11-20T22:19:32.847' AS DateTime), 1, 1)
SET IDENTITY_INSERT [dbo].[M_GroupMaster] OFF
INSERT [dbo].[M_UserMaster] ([userId], [userName], [groupID], [LastLogin], [password], [Activeflag], [LastLoginIP]) VALUES (1, N'admin', 1, CAST(N'2019-11-26T23:44:50.237' AS DateTime), N'21232F297A57A5A743894A0E4A801FC3', N'A', N'::1')
INSERT [dbo].[M_UserMaster] ([userId], [userName], [groupID], [LastLogin], [password], [Activeflag], [LastLoginIP]) VALUES (2, N'amit', 3, CAST(N'2019-11-26T22:54:41.147' AS DateTime), N'21232F297A57A5A743894A0E4A801FC3', N'A', N'::1')
INSERT [dbo].[M_UserMaster] ([userId], [userName], [groupID], [LastLogin], [password], [Activeflag], [LastLoginIP]) VALUES (3, N'Sumit', 3, CAST(N'2019-11-25T00:50:50.100' AS DateTime), N'21232F297A57A5A743894A0E4A801FC3', N'A', N'::1')
SET IDENTITY_INSERT [dbo].[tblMailBox] ON 

INSERT [dbo].[tblMailBox] ([MailId], [Priority], [SMS], [Subject], [Message], [PostDate], [IsViewed], [IsArchived], [IsImportant], [IsDraft], [IsTrash], [Sid], [Rid]) VALUES (23, 2, 1, N'yyyyyyyyy', N'<p>hhhhhhhhhhhh</p>', CAST(N'2019-11-26T23:55:34.040' AS DateTime), 0, 0, 0, 0, 1, 1, 2)
INSERT [dbo].[tblMailBox] ([MailId], [Priority], [SMS], [Subject], [Message], [PostDate], [IsViewed], [IsArchived], [IsImportant], [IsDraft], [IsTrash], [Sid], [Rid]) VALUES (24, 2, 1, N'yyyyyyyyy', N'<p>hhhhhhhhhhhh</p>', CAST(N'2019-11-26T23:55:34.067' AS DateTime), 0, 0, 0, 0, 0, 1, 3)
INSERT [dbo].[tblMailBox] ([MailId], [Priority], [SMS], [Subject], [Message], [PostDate], [IsViewed], [IsArchived], [IsImportant], [IsDraft], [IsTrash], [Sid], [Rid]) VALUES (25, 2, 1, N'sdsd', N'<p>hhhhhhhhhhhh</p>', CAST(N'2019-11-26T23:55:34.067' AS DateTime), 0, 0, 0, 0, 0, 1, 2)
INSERT [dbo].[tblMailBox] ([MailId], [Priority], [SMS], [Subject], [Message], [PostDate], [IsViewed], [IsArchived], [IsImportant], [IsDraft], [IsTrash], [Sid], [Rid]) VALUES (26, 2, 1, N'thgf', N'<p>hhhhhhhhhhhh</p>', CAST(N'2019-11-26T23:55:34.067' AS DateTime), 0, 0, 0, 0, 1, 1, 2)
SET IDENTITY_INSERT [dbo].[tblMailBox] OFF
SET IDENTITY_INSERT [dbo].[tblMailInfo] ON 

INSERT [dbo].[tblMailInfo] ([RowId], [MailId], [Sid], [Rid]) VALUES (3, 12, 1, 2)
INSERT [dbo].[tblMailInfo] ([RowId], [MailId], [Sid], [Rid]) VALUES (4, 12, 1, 3)
INSERT [dbo].[tblMailInfo] ([RowId], [MailId], [Sid], [Rid]) VALUES (5, 13, 3, 2)
INSERT [dbo].[tblMailInfo] ([RowId], [MailId], [Sid], [Rid]) VALUES (6, 14, 1, 2)
INSERT [dbo].[tblMailInfo] ([RowId], [MailId], [Sid], [Rid]) VALUES (7, 15, 1, 2)
SET IDENTITY_INSERT [dbo].[tblMailInfo] OFF
/****** Object:  StoredProcedure [dbo].[Proc_selectUser]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Proc_selectUser]
@groupID int
 as begin
					  select m.userId,m.userName,g.groupID,g.groupName
					  from 	  M_UserMaster		   m
					  join 		   M_GroupMaster	  g
					  on 	  m.groupID=g.	groupID
 end
GO
/****** Object:  StoredProcedure [dbo].[Proc_userLogin_selectLogin]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[Proc_userLogin_selectLogin]
@userName varchar(50),
@LastLoginIP varchar(50)
as

				     BEGIN
        IF EXISTS ( SELECT  1
                    FROM    M_UserMaster
                    WHERE   UserName = @UserName
                            AND Activeflag = 'A' )
            BEGIN
     
                UPDATE  M_UserMaster
                SET     LastLogin = GETDATE(),
                        LastLoginIp = @LastLoginIP
                WHERE   UserName = @UserName
                        AND Activeflag = 'A';
                SELECT a.userId, 
                        a.userName ,
                        a.Password ,
						a.groupID,
						a.LastLogin,
						a.Activeflag
                FROM    M_UserMaster a
                WHERE   a.UserName = @UserName
            END; 
    END;


GO
/****** Object:  StoredProcedure [dbo].[Sp_NewAllMailToTrash]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Sp_NewAllMailToTrash]
@rid bigint
as
 begin
 if EXISTS(select * from tblMailBox where rid=@rid )
 begin
	update tblMailBox set IsTrash=1 where rid=@rid
	select 'success' as status
	end
	else
	begin
	select 'failed' as status
	end
 end
GO
/****** Object:  StoredProcedure [dbo].[Sp_NewComposeMail]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE proc [dbo].[Sp_NewComposeMail]
@priority int  ,
@sms bit  ,
@sub nvarchar(max)  ,
@msg nvarchar(max)  ,
@sid bigint  ,
@rid bigint  

as
begin
insert into tblMailBox (
Priority,
SMS			  ,Subject,Message,PostDate,IsViewed,IsArchived,IsImportant,IsDraft,IsTrash,Sid,Rid
)	 values
(
	  @priority,		  @sms,	 @sub,	@msg,getdate(),0,0,0,0,0 ,@sid,@rid
)
select 'success' as status	
end
GO
/****** Object:  StoredProcedure [dbo].[Sp_NewInboxMail]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE proc [dbo].[Sp_NewInboxMail]
@Rid bigint
as
begin
select 	b.MailId,b.Priority	,b.SMS,b.Subject,b.Message,b.PostDate,b.Rid,u.userId,u.userName
 from tblMailBox  b
 join M_UserMaster u
 on b.Sid=u.userId
where b.Rid=@rid and b.IsViewed=0 and b.IsArchived=0 and b.IsImportant=0 and b.IsDraft=0 and b.IsTrash=0
end
GO
/****** Object:  StoredProcedure [dbo].[Sp_NewMailInfo]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc [dbo].[Sp_NewMailInfo]
@mailid bigint  ,
@rid bigint  ,
@sid bigint 
as
begin
insert into tblMailInfo(
MailId,Rid,Sid
)	 values
(
	  @mailid, @rid,@sid
)
end
GO
/****** Object:  StoredProcedure [dbo].[Sp_NewMovetoTrash]    Script Date: 11/27/2019 12:35:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Sp_NewMovetoTrash]
@mailid bigint
as
begin
IF EXISTS( SELECT * FROM tblMailBox WHERE  MailId = @mailid AND IsTrash = 0 )
	BEGIN 
   update tblMailBox set IsTrash=1 where MailId=@mailid
   SELECT  'Success' AS Status; 
   end
   else
   begin 
   SELECT  'fail' AS Status; 
   end
end
GO
USE [master]
GO
ALTER DATABASE [mandiparishadmessageboard] SET  READ_WRITE 
GO
