
import { Player, Coach, News } from './types';

export const PLAYER_DATA: Player[] = [
    // 골키퍼
    { type: 'GK', pos: 'GK', pos_ko: '골키퍼', name: '양형모', number: '21', career: '2019~ 수원삼성', stats: { '나이': 34, '신장': '185cm', '반사신경': 94, '안정감': 95, '킥': 88 } },
    { type: 'GK', pos: 'GK', pos_ko: '골키퍼', name: '김민준', number: '1', career: '2020~ 수원삼성', stats: { '나이': 26, '신장': '187cm', '반사신경': 88, '안정감': 90, '킥': 85 } },
    { type: 'GK', pos: 'GK', pos_ko: '골키퍼', name: '이경준', number: '31', career: '2024~ 수원삼성', stats: { '나이': 18, '신장': '189cm', '반사신경': 82, '안정감': 80, '킥': 79 } },

    // 수비수
    { type: 'DF', pos: 'CB', pos_ko: '센터백', name: '홍정호', number: '5', career: '전북→2026 수원삼성', stats: { '나이': 36, '신장': '186cm', '수비력': 96, '피지컬': 92, '리더십': 98 } },
    { type: 'DF', pos: 'CB', pos_ko: '센터백', name: '송주훈', number: '4', career: '경남→2026 수원삼성(FA)', stats: { '나이': 31, '신장': '190cm', '수비력': 94, '피지컬': 91, '빌드업': 87 } },
    { type: 'DF', pos: 'CB', pos_ko: '센터백', name: '고종현', number: '3', career: '2022~ 수원삼성', stats: { '나이': 17, '신장': '193cm', '수비력': 85, '피지컬': 88, '포지셔닝': 82 } },
    { type: 'DF', pos: 'CB', pos_ko: '센터백', name: '윤근영', number: '25', career: '2026 수원삼성(FA)', stats: { '나이': 20, '신장': '193cm', '수비력': 80, '피지컬': 87, '성장성': 92 } },
    { type: 'DF', pos: 'CB', pos_ko: '센터백', name: '모경빈', number: '24', career: '매탄고→2026 수원삼성', stats: { '나이': 17, '신장': '187cm', '수비력': 75, '피지컬': 85, '포지셔닝': 78 } },
    { type: 'DF', pos: 'RB', pos_ko: '우측백', name: '장석환', number: '2', career: '2024~ 수원삼성', stats: { '나이': 19, '신장': '178cm', '수비력': 80, '크로스': 82, '체력': 88 } },
    { type: 'DF', pos: 'RB', pos_ko: '우측백', name: '이준재', number: '12', career: '경남→2026 수원삼성(FA)', stats: { '나이': 20, '신장': '180cm', '수비력': 78, '크로스': 85, '속도': 86 } },
    { type: 'DF', pos: 'LB', pos_ko: '좌측백', name: '최지묵', number: '18', career: '2023~ 수원삼성', stats: { '나이': 25, '신장': '178cm', '수비력': 82, '크로스': 80, '체력': 84 } },
    { type: 'DF', pos: 'LB', pos_ko: '좌측백', name: '박대원', number: '33', career: '2022~ 수원삼성', stats: { '나이': 25, '신장': '178cm', '수비력': 79, '크로스': 78, '침착성': 81 } },

    // 미드필더
    { type: 'MF', pos: 'CM', pos_ko: '중원', name: '박현빈', number: '8', career: '부천→2026 수원삼성', stats: { '나이': 20, '신장': '177cm', '패스': 87, '킬패스': 85, '시야': 88 } },
    { type: 'MF', pos: 'DM', pos_ko: '수비형 미드', name: '페신', number: '6', career: '2026 수원삼성(FA)', stats: { '나이': 25, '신장': '178cm', '수비': 82, '침착성': 86, '킥': 84 } },
    { type: 'MF', pos: 'CM', pos_ko: '중원', name: '홍원진', number: '14', career: '2020~ 수원삼성', stats: { '나이': 25, '신장': '183cm', '패스': 82, '지구력': 88, '리더십': 85 } },
    { type: 'MF', pos: 'CM', pos_ko: '중원', name: '이민혁', number: '17', career: '2019~ 수원삼성', stats: { '나이': 22, '신장': '179cm', '패스': 80, '드리블': 82, '체력': 86 } },
    { type: 'MF', pos: 'CM', pos_ko: '중원', name: '강현묵', number: '10', career: '2021~ 수원삼성', stats: { '나이': 22, '신장': '173cm', '패스': 82, '민첩성': 88, '침착성': 85 } },

    // 공격수
    { type: 'FW', pos: 'LW/CAM', pos_ko: '윙어/공격수', name: '헤이스', number: '11', career: '광주 FC→2026 수원삼성', stats: { '나이': 31, '신장': '175cm', '슈팅': 92, '패스': 88, '드리블': 90 } },
    { type: 'FW', pos: 'ST', pos_ko: '스트라이커', name: '일류첸코', number: '9', career: '2021~ 수원삼성', stats: { '나이': 35, '신장': '187cm', '슈팅': 85, '파워': 88, '포스트플레이': 89 } },
    { type: 'FW', pos: 'ST', pos_ko: '스트라이커', name: '김지현', number: '77', career: '2019~ 수원삼성', stats: { '나이': 29, '신장': '183cm', '슈팅': 82, '침착성': 80, '결정력': 84 } },
    { type: 'FW', pos: 'FW', pos_ko: '공격수', name: '강성진', number: '30', career: '2023~ 수원삼성(임대 복귀)', stats: { '나이': 22, '신장': '180cm', '슈팅': 78, '체력': 85, '성장성': 87 } },
];

export const COACH_DATA: Coach[] = [
    { name: '이정효', pos: '감독', career: '광주FC(2022~2025) K리그2 우승·승격(2022년, 2024년)', role: '전술 총괄, 압박 시스템' },
    { name: '마철준', pos: '수석 코치', career: '광주FC(2025)·제주유나이티드·대구FC(2023)·성남FC(2018)', role: '전술 보좌 및 선수 평가' },
    { name: '조용태', pos: '공격 코치', career: '광주FC에서 이정효 감독과 함께 한 공격 전술 담당자', role: '공격 플레이 및 세트피스 설계' },
    { name: '조광수', pos: '골키퍼 코치', career: '울산HD(2024)·제주FC·성남FC(2018)', role: 'GK 전문 훈련 및 선수 개발' },
    { name: '신정환', pos: '코치', career: '광주FC 코칭스태프, 이정효 감독과 동반', role: '피지컬 및 기술 분석' }
];

export const NEWS_DATA: News[] = [
    { date: '2026.01.13', title: '헤이스 공식 영입 완료, 오늘부터 팀 훈련 합류' },
    { date: '2026.01.09', title: '김도연 콜업 발표, 2026 시즌 새로운 얼굴' },
    { date: '2026.01.07', title: '이준재·송주훈·페신·박현빈·홍정호·윤근영 완전 영입 발표' },
    { date: '2026.01.02', title: '이정효 감독 공식 취임, 100명 이상의 기자가 참석한 기자회견' },
    { date: '2025.12.24', title: '이정효 감독 제11대 수원 삼성 감독 공식 선임' },
    { date: '2025.12.21', title: '이정효 감독 광주 FC와 계약 해지 선언' }
];
