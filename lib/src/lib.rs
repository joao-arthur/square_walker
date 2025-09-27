
//struct GameState = {
//    intervalId: number;
//    scenario: Scenario;
//    camera: Camera;
//    context: CanvasRenderingContext2D;
//    dimensions: Dimension;
//    player: Player;
//    entities: undefined;
//};

struct Dimension {
    width: u32,
    height: u32,
}

type Interpolation = fn (a: u32, b: u32, len: u32) -> Vec<u32>;
type Noise = fn (value: u32) -> u32;
type Render = fn (scenario: Scenario) -> ();

struct Camera {
    x: u32,
    y: u32,
    width: u32,
    height: u32,
}

struct Player {
    x: u32,
    y: u32,
    width: u32,
    height: u32,
    x_speed: u32,
    y_speed: u32,
    x_acelleration: u32,
    y_acelleration: u32,
}

#[derive(PartialEq, Eq, Debug, Clone)]
enum Block {
    Air,
    Dirt,
    Grass,
    Stone,
    TreeTrunk,
    TreeLeaf,
    Stairs,
    Wood,
    Water,
}

type Scenario = Vec<Vec<Block>>;

fn scenario_from_columns(columns: Scenario) -> Scenario {
    columns
}

fn scenario_from_lines(lines: Scenario) -> Scenario {
    let i = 0..lines.len();
    let j = 0..lines.get(0).unwrap().len();

    return j.map(|j| i.clone().map(|i| lines.get(i).unwrap().get(j).unwrap().clone()).collect::<Vec<Block>>()).collect()
}

#[cfg(test)]
mod tests {
    use super::{Scenario, Block, scenario_from_columns, scenario_from_lines};

    #[test]
    fn test_scenario_from_columns() {
        assert_eq!(
            scenario_from_columns([
                [Block::Air, Block::Dirt, Block::Grass, Block::Stone].into(),
                [Block::TreeTrunk, Block::TreeLeaf, Block::Stairs, Block::Wood].into(),
            ].into()),
            [
                [Block::Air, Block::Dirt, Block::Grass, Block::Stone],
                [Block::TreeTrunk, Block::TreeLeaf, Block::Stairs, Block::Wood],
            ],
        );
        assert_eq!(
            scenario_from_columns([
                [Block::Air, Block::TreeTrunk].into(),
                [Block::Dirt, Block::TreeLeaf].into(),
                [Block::Grass, Block::Stairs].into(),
                [Block::Stone, Block::Wood].into(),
            ].into()),
            [
                [Block::Air, Block::TreeTrunk],
                [Block::Dirt, Block::TreeLeaf],
                [Block::Grass, Block::Stairs],
                [Block::Stone, Block::Wood],
            ],
        );
    }

    #[test]
    fn test_scenario_from_lines() {
        assert_eq!(
            scenario_from_lines([
                [Block::Air, Block::Dirt, Block::Grass, Block::Stone].into(),
                [Block::TreeTrunk, Block::TreeLeaf, Block::Stairs, Block::Wood].into(),
            ].into()),
            [
                [Block::Air, Block::TreeTrunk],
                [Block::Dirt, Block::TreeLeaf],
                [Block::Grass, Block::Stairs],
                [Block::Stone, Block::Wood],
            ],
        );
        assert_eq!(
            scenario_from_lines([
                [Block::Air, Block::TreeTrunk].into(),
                [Block::Dirt, Block::TreeLeaf].into(),
                [Block::Grass, Block::Stairs].into(),
                [Block::Stone, Block::Wood].into(),
            ].into()),
            [
                [Block::Air, Block::Dirt, Block::Grass, Block::Stone],
                [Block::TreeTrunk, Block::TreeLeaf, Block::Stairs, Block::Wood],
            ],
        );
    }

}